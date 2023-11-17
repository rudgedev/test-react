export enum AppRoutes {
  MAIN = 'MAIN',
  NOT_FOUND = 'NOT_FOUND',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
};
