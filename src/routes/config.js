import App from 'src/app';
import Home from 'src/docs/home';

const ROUTES_CONFIG = [
  {
    route: '/home',
    component: Home,
    id: 2,
  },
  {
    route: '/',
    component: App,
    id: 1,
  },
];

export default ROUTES_CONFIG;
