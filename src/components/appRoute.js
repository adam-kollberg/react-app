import React, {useState, useEffect} from "react";
import Header from "./header/header";

import Home from "./home/home"
import Booking from"./booking/booking"
import LoginForm from "./login/loginForm"
import ResetPassword from "./login/forgotPassword"
import AddCard from "./cards/addCards"
import RegisterForm from "./register/registerForm"
import{Route, BrowserRouter as Router, Switch} from "react-router-dom";
import BookingList  from "./booking/myBooking";
import SendPassword from "./login/resetPassword";
import CheckoutForm from "./booking/checkout";
import SingleOrder from "./booking/singleOrder";





export default function AppRoute() {
const [getToken, setToken]=useState(false);

    useEffect (()=>{
        const Token = localStorage.getItem("token");
        setToken(Token);
       
       
       
       
         }, [])




    return(
<>
{getToken?
<Router>
<Header/>
<Switch>

<Route path="/"  component={Home}/>
<Route path="/book" component={Booking}/>
<Route  path="/login" component={LoginForm}  />
<Route  path="/add-products" component={AddCard}/>
<Route  path="/register" component={RegisterForm}/>
<Route  path="/my-bookings" component={BookingList}/>
<Route  path="/forgot-password" component={ResetPassword}/>
<Route  path="/reset-password" component={SendPassword}/>
<Route  path="/checkout" component={CheckoutForm}/>  
<Route  path="/my-booking" component={SingleOrder}/> 
</Switch>
</Router>

:


<Router>
<Route exact path="/"  component={LoginForm}/>
<Route exact path="/login"  component={LoginForm}/>
<Route exact path="/register" component={RegisterForm}/>
</Router>
}
</>
     

    )
}