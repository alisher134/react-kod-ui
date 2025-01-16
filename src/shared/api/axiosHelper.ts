import { CreateAxiosDefaults } from 'axios';

import { API_CONFIG } from '@shared/config/api';
import { LS_LANGUAGE_KEY } from '@shared/constants';

const language = localStorage.getItem(LS_LANGUAGE_KEY);

export const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': language,
  },
};
