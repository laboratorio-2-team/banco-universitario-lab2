import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import { MainLayout } from '../layouts';
import { authRouting } from './AuthRouting';
import { PrivateProtection, PublicProtection } from './guards';
import { dashBoardRouting } from './DashBoardRouting';

const router = createBrowserRouter([
  {
    path: "/",
    // TODO: Move dashboard Router.
    // TODO: Change PrivateProtection to Public Protection.
    element: <PublicProtection children={<MainLayout />} />,
    children: [
      // { index: true, element: <Navigate to="/login" /> },
      ...homeRouter,
      ...authRouting
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateProtection children={<MainLayout />}/>,
    children: [
      ...dashBoardRouting
    ]
  }
]);

export const Router = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
