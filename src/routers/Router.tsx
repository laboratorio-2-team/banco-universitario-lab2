import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import { MainLayout } from '../layouts';
import { authRouting } from './AuthRouting';
import { PrivateProtection } from './guards';

const router = createBrowserRouter([
  {
    path: "/",
    // TODO: Move dashboard Router.
    // TODO: Change PrivateProtection to Public Protection.
    element: <PrivateProtection children={<MainLayout />} />,
    children: [
      // { index: true, element: <Navigate to="/login" /> },
      ...homeRouter,
      ...authRouting
    ]
  },
]);

export const Router = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
