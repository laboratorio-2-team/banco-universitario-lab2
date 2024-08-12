import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import { MainLayout } from '../layouts';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      ...homeRouter,
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
