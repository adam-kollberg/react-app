import React from "react";
import Header from "./header/header";
import CardList from "./cards/cardList";
import Home from "./home/home"
import Booking from"./booking/booking"
import LoginForm from "./login/loginForm"
import ResetPassword from "./login/forgotPassword"
import AddCard from "./cards/addCards"
import RegisterForm from "./register/registerForm"
import{Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import BookingList  from "./booking/myBooking";
import SendPassword from "./login/resetPassword";





export default function AppRoute() {

    return(
<>

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

</Switch>



</Router>
</>
     

    )
}