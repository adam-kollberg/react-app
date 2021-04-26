import React from "react";
import {Link} from "react-router-dom"




export default function SingleBooking ({productName, productPrice, productDate}) {




return(

<div className = "px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 m-2">
<form>
<h2>{productName}</h2>
<p>Pris: {productPrice}</p>
<p>Datum: {productDate}</p>
<button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">Change Booking</button>
<button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">Delete Booking</button>

</form>
 </div>


)

}