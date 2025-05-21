import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [{ path: '/', element: <Home /> }],
  },
]);
export default router;
