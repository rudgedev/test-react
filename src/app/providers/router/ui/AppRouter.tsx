import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
      ))}
    </Routes>
  );
};
