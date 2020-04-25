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

export const SIDE_BAR_CONFIG = {
  GUIDES: [
    {
      title: 'Introduction',
      path: '/home',
    },
    {
      title: 'Get Started',
      path: '/home',
    },
    {
      title: 'Github',
      path: '/home',
    },
  ],
  COMPONENTS: [
    {
      title: 'Button',
      path: '/home',
    },
    {
      title: 'Label',
      path: '/home',
    },
    {
      title: 'Input',
      path: '/home',
    },
    {
      title: 'Form',
      path: '/home',
    },
    {
      title: 'Divider',
      path: '/home',
    },
    {
      title: 'Icon',
      path: '/home',
    },
    {
      title: 'Image',
      path: '/home',
    },
    {
      title: 'Container',
      path: '/home',
    },
  ],
};

export default ROUTES_CONFIG;
