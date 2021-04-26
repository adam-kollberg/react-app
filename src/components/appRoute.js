import React from "react";
import Header from "./header/header";
import CardList from "./cards/cardList";
import Home from "./home/home"
import Booking from"./booking/booking"
import LoginUser from "./login/login"
import{Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import RegisterUser from "./register";
import BookingList  from "./booking/myBooking";




export default function AppRoute() {

    return(
<>
<Router>
<Header/>
<Switch>
<Route exact path="/"  component={Home}/>
<Route path="/book" component={Booking}/>
<Route exact path="/login" component={LoginUser}/>
<Route exact path="/register" component={RegisterUser}/>
<Route exact path="/my-bookings" component={BookingList}/>
</Switch>

</Router>
</>
     

    )
}