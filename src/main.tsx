import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';

import { QueryProvider } from '@app/providers/query-provider';
import { router } from '@app/providers/router';
import '@app/styles/index.scss';

import '@shared/config/i18n/i18n';
import { toastOptions } from '@shared/config/toast';

const root = document.getElementById('root')!;
const container = createRoot(root as HTMLElement);

container.render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
      <Toaster toastOptions={toastOptions} gutter={20} />
    </QueryProvider>
  </StrictMode>,
);
