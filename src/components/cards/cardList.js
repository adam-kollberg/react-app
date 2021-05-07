import React,{useState, useEffect} from "react";
import Card from "./card";
import axios from "axios";

function CardList () {

const [products, setProducts] = useState([]);


useEffect (()=>{
const fetchProducts=async()=> {

const response = await axios.get("http://localhost:1337/products")

setProducts(response.data)

console.log(response);

 }
 
 fetchProducts();

}, [])





return(
<>
<div className="flex flex-row flex-wrap justify-center">

{products.map((product)=>{
        return (
<Card productName={product.name}  
      productPrice={product.price} 
      productDate={product.date}
      productImg={product.productimg}
      teraphist={product.teraphist.name}
      
      
      
      />

   ) 
  }
 ) 
}

</div>


</>
)

}

export default CardList;


