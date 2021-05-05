import React from "react";
import SingleBooking from "./singleBooking";



const arrayOfBooking = [
 { productName: "Psykologbesök på Mottagning",  productPrice: "1800", productDate: "2021-04-08" } ,  
  
]

function BookingList () {

return(
<>
    <section className="hero">
 <h1> My Bookings</h1>
</section>

<div className="flex flex-row flex-wrap justify-center">

{arrayOfBooking.map((product)=>{
        return (
<SingleBooking productName={product.productName}  
      productPrice={product.productPrice} 
      productDate={product.productDate} 
      
      
      
      />

   ) 
    
  }
 ) 
}

</div>
</>
)

}

export default BookingList;