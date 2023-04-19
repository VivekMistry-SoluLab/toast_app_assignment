import React from 'react';

export const guestRoutes = [
  {
    path: '/special',
    name: 'special',
    exact: true,
    component: React.lazy(() => import('../../views/user/Special/Special')),
  },
  {
    path: '/main',
    name: 'Main',
    exact: true,
    component: React.lazy(() => import('../../views/user/Main/Main')),
  },
  {
    path: '/beverages',
    name: 'beverages',
    exact: true,
    component: React.lazy(() => import('../../views/user/Beverages/Beverages')),
  },
  {
    path: '/deserts',
    name: 'deserts',
    exact: true,
    component: React.lazy(() => import('../../views/user/Deserts/Deserts')),
  },
  {
    path: '/store',
    name: 'store',
    exact: true,
    component: React.lazy(() => import('../../views/user/Store/Store')),
  },
  {
    path: '/cart',
    name: 'cart',
    exact: true,
    component: React.lazy(() => import('../../views/user/Cart/Cart')),
  },
];

export const userRoutes = [];
