import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddExpenses from './pages/AddExpenses';
import AddOrder from './pages/AddOrder';
import CutomerList from './pages/CutomerList';
import Inventory from './pages/Inventory';
import SalesProjection from './pages/SalesProjection';

const Layout = () => (
  <div className="flex">
    <Menu />
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/addexpense', element: <AddExpenses /> },
      { path: '/addorder', element: <AddOrder /> },
      { path: '/customerlist', element: <CutomerList /> },
      { path: '/inventory', element: <Inventory /> },
      { path: '/salesprojection', element: <SalesProjection /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
