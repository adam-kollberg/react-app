import { React, useState, useEffect } from "react";
import axios from "axios";
import "./checkout.css";
import dateFormat from "dateformat";
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51IB6aFBCV55mFhVN8xLXlAsXGWxe197hpZb7GyrvhX6lCwGnQK8Wan3y9iF2grOw3PLygiFtBSP57iCk7fJF13k400hQSYsYbo');





function Checkout() {
  const [bookings, setBookings] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBookingID = async () => {
      const response = await axios.get(
        `http://localhost:1337/bookings/${localStorage.getItem("BookingID")}`
      );

      setBookings(response.data);
      setProducts(response.data.product);

      console.log("produkter", response.data.product);
    };

    fetchBookingID();
  }, []);


  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
     
    const price = products.price;
    const name = products.name; // state /props 
    // Call your backend to create the Checkout Session

    // konsumerar / request 
    const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name,price:price})
    //('/create-checkout-session', { method: 'POST' });

    console.log(response)

    const sessionId = response.data.id

    console.log(sessionId)
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };






  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="checkout_forms">
          <h1 className="mb-8 text-2xl text-center">Faktureringsuppgifter:</h1>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Namn:</strong> {bookings.namn}{" "}
          </h3>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Email:</strong> {bookings.email}{" "}
          </h3>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Telefon:</strong> {bookings.phone}{" "}
          </h3>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Adress:</strong> {bookings.adress}{" "}
          </h3>
        </div>
        <div className="checkout_forms">
          <h1 className="mb-8 text-2xl text-center">Orderdetaljer:</h1>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Typ av besök:</strong> {products.name}{" "}
          </h3>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Datum och tid:</strong>{" "}
            {dateFormat(products.date, "yyyy-mm-dd  HH:MM")}{" "}
          </h3>
          <h3 className="mb-8 text-1xl text-center">
            <strong>Pris:</strong> {products.price} SEK{" "}
          </h3>
        </div>
        <button role="link" onClick={handleClick}
                type="submit"
                className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
              >Betala</button>
      </div>
    </>
  );
}

export default Checkout;
