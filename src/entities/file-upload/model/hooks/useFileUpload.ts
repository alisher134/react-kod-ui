import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { fileUploadService } from '@entities/file-upload/api/fileUploadService';

import { errorHandler } from '@shared/utils';

export const useFileUpload = () => {
  const { mutateAsync } = useMutation({
    mutationKey: ['upload media'],
    mutationFn: (file: FormData, folder?: string) => fileUploadService.uploadFile(file, folder),
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  return { mutateAsync };
};
