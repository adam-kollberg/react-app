import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Home from "./home/home";
import Booking from "./booking/booking";
import LoginForm from "./login/loginForm";
import ResetPassword from "./login/forgotPassword";
import AddCard from "./cards/addCards";
import RegisterForm from "./register/registerForm";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookingList from "./booking/myBooking";
import SendPassword from "./login/resetPassword";
import CheckoutForm from "./booking/checkout";
import Update from "./booking/update";


export default function AppRoute() {
  const [getRole, setRole] = useState("");

  useEffect(() => {
    const Role = localStorage.getItem("role");
    setRole(Role);
  }, []);

  return (
    <>
      {getRole ? (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book" component={Booking} />
            <Route path="/login" component={LoginForm} />
            <Route path="/add-products" component={AddCard} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/my-bookings" component={BookingList} />
            <Route path="/forgot-password" component={ResetPassword} />
            <Route path="/reset-password" component={SendPassword} />
            <Route path="/checkout" component={CheckoutForm} />
            <Route path="/update-booking" component={Update}/>
            
          </Switch>
        </Router>
      ) : (
        <Router>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Router>
      )}
    </>
  );
}
