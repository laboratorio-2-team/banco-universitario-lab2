import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import { MainLayout } from '../layouts';
import { authRouting } from './AuthRouting';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
