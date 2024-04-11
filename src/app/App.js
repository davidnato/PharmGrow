import React from 'react';
import './App.css';
import { LoginPage } from './pages/Login.jsx'
import {CreateAccountPage} from './pages/CreateAccount.jsx'
import { DashboardPage } from './pages/dashboard.jsx';
import { InventoryPage } from './pages/Inventory.jsx';
import { MedicineDetailPage } from './pages/medicineDetail.jsx';
import { AddMedicinePage } from './pages/AddMedicine.jsx';
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './utilities/routes.js';
import { IsProtectedRoute } from './hoc/isProtectedRoute.jsx';
import { MedicinesListPage } from './pages/MedicinesList.jsx';
import { LandingPage } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: routes.dashboard(),
    element: <IsProtectedRoute><DashboardPage/></IsProtectedRoute>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/signUP',
    element: <CreateAccountPage/>
  },
  {
    path: routes.inventory(),
    element: <InventoryPage/>
  },
  {
    path: routes.addMedicine(),
    element: <AddMedicinePage/>
  },
  {
    path: routes.medicineDetail(),
    element: <MedicineDetailPage/>
  },
  {
    path: routes.medicinegroups(),
    element: ''
  },
  {
    path: routes.medicineslist(),
    element: <MedicinesListPage/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
])
function App() {
  const [info, setInfo] = React.useState({})
  return (
  <>
  <ToastContainer/>
  <RouterProvider router={router}/>
  </>
  );
}

export default App;
