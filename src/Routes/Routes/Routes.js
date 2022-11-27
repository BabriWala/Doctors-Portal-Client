import {createBrowserRouter} from 'react-router-dom';
import Authentication from '../../Layout/Authentication';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import AdminRoute from '../PrivateRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: '/authentication',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/authentication/login',
                element: <Login></Login>
            },
            {
                path: '/authentication/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
        ]
    }
])

export default router;