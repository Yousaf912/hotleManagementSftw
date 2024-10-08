import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SIgnIn";
import Signup from "./SignUp/SignUp";
import CustomerBooking from "./UserHomePage/CustomerBooking/CustomerBooking";
import AllAvailAbleRooms from "./UserHomePage/AllAvailableRooms/AllAvailAbleRooms";
import Admin from "../Admin";
import App from "../App";
import UserProfile from "./UserHomePage/UserProfile/UserProfile";


export const AllRoutes = createBrowserRouter([
    {
        path: '/SignUp',
        element: <Signup />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <SignIn />
    },
    {
        path: '/home',
        element: <Admin />
    },
    {
        path: '/home/addRoom',
        element: <Admin />
    },
    {
        path: '/home/roomlist',
        element: <Admin />
    },
    {
        path: '/home/booking',
        element: <Admin />
    },
    {
        path: '/home/bookingDetails',
        element: <Admin />
    },
    {
        path: '/home/booking/confirmDetails/:id',
        element: <Admin />
    },
    {
        path: '/home/booking/confirmPrice/:id',
        element: <Admin />
    },
    {
        path: `/home/booking/allBookings/:id?`,
        element: <Admin />
    },
    {
        path: '/home/customer/:id',
        element: <Admin />
    },
    {
        path: '/home/addstaff',
        element: <Admin />
    },
    {
        path: '/home/stafflist',
        element: <Admin />
    },
    {
        path: '/home/staff/SingleSstaff/:type/:id',
        element: <Admin />
    },
    {
        path: '/home/underCleanRooms',
        element: <Admin />
    },
    {
        path:'/home/addfood',
        element:<Admin/>
    },
    {
        path:'/home/foodlist',
        element:<Admin/>
    },
    {
        path:'/home/allusers',
        element:<Admin/>
    },
    {
        path:'/home/allbookings',
        element:<Admin/>
    },
    {
        path:'/home/allorders/:id?',
        element:<Admin/>
    },
    {
        path:'/home/allcomplains/:id?',
        element:<Admin/>
    },
    {
        path:'/home/allservicesrequests/:id?',
        element:<Admin/>
    },
    {
        path:'/home/allpayments/:id?',
        element:<Admin/>
    },






    {
        path: '/RoomBooking/:id/:id',
        element: <CustomerBooking />
    },
    {
        path: '/AllRooms',
        element: <AllAvailAbleRooms />
    },
    {
        path: '/AllRooms/RoomBooking/:id/:id',
        element: <CustomerBooking />
    },
    {
        path: '/profile/:id',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/services',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/services/request',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/services/myRequest',
        element: <UserProfile />
    },
    {
        path: `/profile/:id/bookings/:room?`,
        element: <UserProfile />
    },
    {
        path: '/profile/:id/orderfood',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/orderfood/order',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/orderfood/order/confirmorder/:id/:name',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/orderfood/orderList',
        element: <UserProfile />
    },

    {
        path: '/profile/:id/complains',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/complains/complain',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/complains/complainStatus',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/profile',
        element: <UserProfile />
    },
    {
        path: '/profile/:id/bookings/paymentslip/:room',
        element: <UserProfile />
    },
    

])