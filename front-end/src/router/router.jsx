import HomePage from '../pages/home';

export const ROUTE_ID = {
  HOME: 'Home',
};

export const PATHNAME_LIST = {
  HOME: '/',
};

export const NAME_LAYOUT = {
  DEFAULT_LAYOUT: 'DefaultLayout',
  MAIN_LAYOUT: 'MainLayout',
};

export const DEFAULT_PATHNAME = PATHNAME_LIST.HOME;

// Define routes
export const HomeRoute = {
  id: ROUTE_ID.HOME,
  path: PATHNAME_LIST.HOME,
  component: HomePage,
  layout: NAME_LAYOUT.DEFAULT_LAYOUT,
};

export const appRoute = [HomeRoute];
