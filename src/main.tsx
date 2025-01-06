import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';

import { QueryProvider } from '@app/providers/query-provider';
import { router } from '@app/providers/router';
import '@app/styles/index.scss';

import { toastOptions } from '@shared/config/toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
      <Toaster toastOptions={toastOptions} gutter={20} />
    </QueryProvider>
  </StrictMode>,
);
