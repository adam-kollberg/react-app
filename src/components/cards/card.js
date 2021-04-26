import React from "react";
import {Link} from "react-router-dom"




export default function Card ({productName, productPrice, productDate}) {




return(

<div className = "px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 m-2">
<form on s>
<h2>{productName}</h2>
<p>Pris: {productPrice}</p>
<p>Datum: {productDate}</p>
<Link to="/book">
<button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">Boka tid</button>
</Link>
</form>
 </div>


)

}