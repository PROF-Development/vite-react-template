import { createBrowserRouter } from 'react-router-dom';
import { getValidRoutes } from './routes';

export const router = createBrowserRouter(getValidRoutes());
