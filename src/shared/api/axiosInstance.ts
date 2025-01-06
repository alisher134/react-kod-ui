import axios from 'axios';

import { API_CONFIG } from '../config/api/apiConfig';

export const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
