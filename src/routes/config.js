import App from 'src/app';
import Home from 'src/docs/home';
import Button from 'src/docs/button';

const ROUTES_CONFIG = [
  {
    route: '/home',
    component: Home,
    showSidebar: true,
    id: 1,
  },
  {
    route: '/button',
    component: Button,
    showSidebar: true,
    id: 2,
  },
  {
    route: '/',
    component: App,
    showSidebar: false,
    id: 3,
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
      path: '/button',
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
