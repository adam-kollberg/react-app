import React from "react";
import {Link, useParams, Switch} from "react-router-dom"







export default function Card ({productName, productPrice, productDate, productImg, productID}) {




return(
<>

<div className="py-6 mx-6" >

<div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">

<div className="w-1/3 bg-cover" > <img src={`http://localhost:1337${productImg.formats.small.url}`} alt="some image from database"/>

</div>

<div className="w-2/3 p-4">

<h1 className="text-gray-900 font-bold text-2xl adam">{productName}</h1>

<p className="mt-2 text-gray-600 text-sm">{productDate}</p>
<p className="mt-2 text-gray-600 text-sm">{productID}</p>



<div className="flex item-center mt-2">



</div>

<div className="flex item-center justify-between mt-3">

<h1 className="text-gray-700 font-bold text-xl">{productPrice}</h1>



<Link to= {`/book?name=${productName}&id=${productID}&price=${productPrice}`}>
<button value={productID} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Boka nu</button>
</Link>








</div>

</div>

</div>

</div>



</>
)

}