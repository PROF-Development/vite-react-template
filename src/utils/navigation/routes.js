import HomePage from '../../pages/HomePage.jsx';
import { HOME_PATH } from './path.js';

const publicRoutes = [
  {
    path: HOME_PATH,
    Component: HomePage,
  },
]

const privateRoutes = [
  {
  },
];

export const getValidRoutes = (login) => {
  if (!login) return publicRoutes;
  return publicRoutes.concat(privateRoutes);
};


