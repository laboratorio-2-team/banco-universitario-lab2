import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import { DashboardLayout, MainLayout } from '../layouts';
import { authRouting } from './AuthRouting';
import { PrivateProtection, PublicProtection } from './guards';
import { dashBoardRouting } from './DashBoardRouting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicProtection children={<MainLayout />} />,
    children: [
      ...homeRouter,
      ...authRouting
    ]
  },
  {
    path: "/",
    element: <PrivateProtection children={<DashboardLayout />}/>,
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
