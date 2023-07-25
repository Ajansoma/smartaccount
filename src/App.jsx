import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddExpenses from './pages/AddExpenses';
import AddOrder from './pages/AddOrder';
import CutomerList from './pages/CutomerList';
import Inventory from './pages/Inventory';
import SalesProjection from './pages/SalesProjection';
import AddInventory from './pages/AddInventory';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';

const RequireAuth = function ({ children }) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return currentUser ? children : <Navigate to="/login" />;
};

const Layout = () => (
  <div className="flex">
    <Menu />
    <div className="flex-1 max-h-screen overflow-scroll">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/register',
    element: (
      <RequireAuth>
        <Register />
      </RequireAuth>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/addexpense', element: <AddExpenses /> },
      { path: '/addorder', element: <AddOrder /> },
      { path: '/addinventory', element: <AddInventory /> },
      { path: '/customerlist', element: <CutomerList /> },
      { path: '/inventory', element: <Inventory /> },
      { path: '/salesprojection', element: <SalesProjection /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
