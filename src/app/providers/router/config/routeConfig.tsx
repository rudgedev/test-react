import { type RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, routePath } from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
};
