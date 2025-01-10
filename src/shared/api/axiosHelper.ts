import { CreateAxiosDefaults } from 'axios';

import { API_CONFIG } from '@shared/config/api';

export const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};
