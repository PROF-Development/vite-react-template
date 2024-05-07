import HomePage from '../../pages/HomePage.jsx';
import {HOME_PATH} from './path.js';

const publicRoutes = [
  {
    path: HOME_PATH,
    Component: HomePage,
  }
];


// For example
const privateRoutes = [
  {
    path: '/profile',
    Component: HomePage,
  },
];

// Access business logic. Modify function to manage access to some paths
export const getValidRoutes = (login) => {
  if (!login) return publicRoutes;
  return publicRoutes.concat(privateRoutes);
};
