import React from 'react';
const App = React.lazy(() => import('src/app'));

const ROUTES_CONFIG = [
    {
        path: '/',
        component: <App />,
        id: 1,
    }
];

export default ROUTES_CONFIG;
