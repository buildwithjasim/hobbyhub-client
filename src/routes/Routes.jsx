import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllGroups from '../pages/AllGroups';
import CreateGroup from '../pages/CreateGroup';
// import CreateGroup from '../pages/CreateGroup';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/groups', element: <AllGroups /> },
      // {
      //   path: '/group/:id',
      //   element: (
      //     <PrivateRoute>
      //       <GroupDetails />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: '/createGroup',
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      // {
      //   path: '/myGroups',
      //   element: (
      //     <PrivateRoute>
      //       <MyGroups />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: '/updateGroup/:id',
      //   element: (
      //     <PrivateRoute>
      //       <UpdateGroup />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
export default router;
