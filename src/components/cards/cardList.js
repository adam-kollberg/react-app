import React from "react";
import Card from "./card";



const arrayOfProducts = [
 { productName: "Psykologbesök på Motagning",  productPrice: "1800", productDate: "2021-04-08" } ,  
 { productName: "Psykologbesök video",  productPrice: "800" } , 
 { productName: "Psykologbesök KBT Online",  productPrice: "1000" }  
]

function CardList () {

return(

<div className="flex flex-row flex-wrap justify-center">

{arrayOfProducts.map((product)=>{
        return (
<Card productName={product.productName}  
      productPrice={product.productPrice} 
      productDate={product.productDate} 
      
      
      
      />

   ) 
  }
 ) 
}

</div>

)

}

export default CardList;


