
import { useLocation } from 'react-router-dom'
import Profile from '../Components/Profile/Profile';
import Services from '../Components/Services/Services';
import BookingsTwo from '../Components/Bookings/Bookings';
import Complains from '../Components/Complains/Complains';
import OrderFood from '../Components/OrderFood/OrderFood';
import Slip from '../Components/AmountSLip/Slip';
import ServicesList from '../Components/Services/ServicesList';
import ComplainStatus from '../Components/Complains/ComplainStatus';
import OrderList from '../Components/OrderFood/OrderList';
import ConfirmFood from '../Components/OrderFood/ConfirmFood';

export default function CenterDataTwo() {
const location = useLocation();
const name = location.pathname.split('/')[3];
const name2 = location.pathname.split('/')[4];
const name3 = location.pathname.split('/')[5];



const data:any = {
    'profile':<Profile/>,
    'request':<Services/>,
    'myRequest':<ServicesList/>,
    'bookings':<BookingsTwo/>,
    'complain':<Complains/>,
    'complainStatus':<ComplainStatus/>,
    'order':<OrderFood/>,
    'orderList':<OrderList/>,
    'paymentslip':<Slip/>,
    'confirmorder':<ConfirmFood/>
}
const element = data[name3]|| data[name2] || data[name] 


  return (
    <div>
        {element}
    </div>
  )
}

