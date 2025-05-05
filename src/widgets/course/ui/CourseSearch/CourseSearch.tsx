import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { courseService } from '@entities/course/api/courseService';
import { ISearchCourse } from '@entities/course/types/courseTypes';

import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Modal } from '@shared/ui/Modal';

import styles from './CourseSearch.module.scss';

export const CourseSearch = () => {
  const {
    register: registerInput,
    formState: { errors },
    handleSubmit,
  } = useForm<ISearchCourse>({ mode: 'onSubmit' });
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ['course/search'],
    queryFn: () => courseService.searchCourse(searchTerm),
    select: ({ data }) => data,
    enabled: !!searchTerm,
  });

  const onSubmit: SubmitHandler<ISearchCourse> = ({ searchTerm }) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.search}>
      <Button variant="secondary" onClick={() => setIsOpen((prev) => !prev)}>
        <Search /> Поиск
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)}>
          <div className={styles.modal}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <Input
                {...registerInput('searchTerm')}
                error={errors.searchTerm}
                prefix={<Search />}
                placeholder="Поиск"
                size="full"
                suffix={<Button>Найти</Button>}
              />
            </form>

            <ul className={styles.list}>
              {data?.courses.map((course) => (
                <li key={course.id} className={styles.item}>
                  <div className={styles.top}>
                    <h3 className={styles.title}>{course.title}</h3>
                    <Button isLink variant="secondary" href={'/course/' + course.slug}>
                      О курсе
                    </Button>
                  </div>

                  <p className={styles.description}>{course.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};
