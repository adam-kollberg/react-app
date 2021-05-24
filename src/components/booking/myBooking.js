import React, {useState, useEffect} from "react";
import axios from "axios";
import dateFormat from 'dateformat';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faClock } from "@fortawesome/free-solid-svg-icons";







function BookingList () {
const [myBookings, setMyBookings] = useState([]);


        useEffect (()=>{
                const fetchBookings=async()=> {
                const userId = localStorage.getItem("id");
                const response = await axios.get(`http://localhost:1337/users/${userId}`)
                
                console.log("hej",response.data)
                 
                setMyBookings(response.data.bookings)


               

                
                 }
                 
                 fetchBookings();
                
                }, [])





return(
<>
<section className="hero">
 <h1> Mina Bokningar</h1>
</section>
{myBookings.map((bookings)=>{
        return (



<div className="py-6 mx-6" >

<div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">



<div className="w-2/3 p-4">

<h1 className="text-gray-900 font-bold text-2xl ">Order ID: {bookings.id} </h1>

<p className="mt-2 text-gray-600 text-sm"><FontAwesomeIcon icon={faUser}/> {bookings.namn}</p>

<p className="mt-2 text-gray-600 text-sm"><FontAwesomeIcon icon={faClock}/> {dateFormat(bookings.published_at , "yyyy-mm-dd  HH:MM")}</p>





<div className="flex item-center mt-2">



</div>

<div className="flex item-center justify-between mt-3">

<h1 className="text-gray-700 font-bold text-xl">{bookings.price} SEK </h1>








</div>
</div>

</div>
<Link to = {`/my-booking?id=${bookings.id}`}>
  <button class="uppercase mt-8 mx-auto shadow bg-black hover:bg-black-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Se order detaljer</button>
    </Link>
</div>
    
    

        
                )
        }
)
}

</>

)

}

export default BookingList;