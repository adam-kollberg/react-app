import  {React, useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./checkout.css"
import dateFormat from 'dateformat';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';






function Checkout() {

    const [bookings, setBookings] = useState([]);
    const [products, setProducts] = useState([]);
    



    useEffect (()=>{
        const fetchBookingID=async()=> {
        
        const response = await axios.get(`http://localhost:1337/bookings/${localStorage.getItem("BookingID")}`  );
        
        
        
       

       setBookings(response.data)
       setProducts(response.data.product)

       console.log("produkter",response.data.product)
        
       
        
       
        
         }
         
         fetchBookingID();
         
        
        },  [])
   


       
   

        

return (
        <>
<div class="grid grid-cols-2 gap-2">
  <div className="checkout_forms">
  <h1 className = "mb-8 text-2xl text-center">Faktureringsuppgifter:</h1>
  <h3 className = "mb-8 text-1xl text-center"><strong>Namn:</strong> {bookings.namn} </h3>
  <h3 className = "mb-8 text-1xl text-center"><strong>Email:</strong> {bookings.email} </h3>
  <h3 className = "mb-8 text-1xl text-center"><strong>Telefon:</strong>  {bookings.phone} </h3>
  <h3 className = "mb-8 text-1xl text-center"><strong>Adress:</strong> {bookings.adress} </h3>
  
  
  </div>
  <div className="checkout_forms">
  <h1 className = "mb-8 text-2xl text-center">Orderdetaljer:</h1>
  <h3 className = "mb-8 text-1xl text-center"><strong>Typ av besök:</strong>  {products.name} </h3>
  <h3 className = "mb-8 text-1xl text-center"><strong>Datum och tid:</strong>  {dateFormat(products.date , "yyyy-mm-dd  HH:MM" )} </h3>
  <h3 className = "mb-8 text-1xl text-center"><strong>Pris:</strong>  {products.price} SEK </h3>
  
  
      </div>
  
     
</div>





        </>
    )

}

export default Checkout;
