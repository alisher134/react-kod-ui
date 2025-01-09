import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IFileIUpload } from '../model/types/fileUploadTypes';

export const fileUploadService = {
  async uploadFile(file: FormData, folder?: string) {
    return await axiosInstance.post<IFileIUpload>(API_CONFIG.MEDIA.UPLOAD, file, {
      params: {
        folder,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
