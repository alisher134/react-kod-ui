import { Suspense } from 'react';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default App;
