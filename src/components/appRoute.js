import React, {useState, useEffect} from "react";
import Header from "./header/header";

import Home from "./home/home"
import Booking from"./booking/booking"
import LoginForm from "./login/loginForm"
import ResetPassword from "./login/forgotPassword"
import AddCard from "./cards/addCards"
import RegisterForm from "./register/registerForm"
import{Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
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

<Route exact path="/"  component={Home}/>
<Route path="/book" component={Booking}/>
<Route exact path="/login" component={LoginForm}  />
<Route exact path="/add-products" component={AddCard}/>
<Route exact path="/register" component={RegisterForm}/>
<Route exact path="/my-bookings" component={BookingList}/>
<Route exact path="/forgot-password" component={ResetPassword}/>
<Route exact path="/reset-password" component={SendPassword}/>
<Route exact path="/checkout" component={CheckoutForm}/>  
<Route exact path="/my-booking" component={SingleOrder}/> 
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