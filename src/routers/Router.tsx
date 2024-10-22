import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import authRouting from './AuthRouting'; 
import { MainLayout } from '../layouts';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      ...homeRouter,
      ...authRouting,
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
