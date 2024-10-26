import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import homeRouter from './homeRouter';
import authRouting from './AuthRouting'; 
import { MainLayout } from '../layouts';
import { authRouting } from './AuthRouting';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      // { index: true, element: <Navigate to="/login" /> },
      ...homeRouter,
<<<<<<< Updated upstream
      ...authRouting,
=======
      ...authRouting
>>>>>>> Stashed changes
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
