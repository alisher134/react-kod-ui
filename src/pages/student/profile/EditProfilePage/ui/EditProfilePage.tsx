import { EditProfileForm } from '@features/profile/EditProfileForm';

import styles from './EditProfilePage.module.scss';

const EditProfilePage = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мой профиль</h1>

        <EditProfileForm />
      </div>
    </section>
  );
};

export default EditProfilePage;