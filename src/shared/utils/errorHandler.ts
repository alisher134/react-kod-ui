import { isAxiosError } from 'axios';

export const errorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response?.data.message;
  }
};
