import React,{useState, useEffect} from "react";
import Card from "./card";
import axios from "axios";

function CardList () {

const [products, setProducts] = useState([]);
const [loadPage, setLoadPage] = useState(9);


useEffect (()=>{
const fetchProducts=async()=> {

const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)

setProducts(response.data)

console.log(response);

 }
 
 fetchProducts();

}, [loadPage])



function loadMore() {
 let dynamicPage = loadPage + 2;
setLoadPage(dynamicPage)

}



function loadLess() {
        let dynamicPage = loadPage - 2;
       setLoadPage(dynamicPage)
       
       }

return(
<>
<div className="flex flex-row flex-wrap justify-center">

{products.map((product)=>{
        return (
<Card productName={product.name}  
      productPrice={product.price} 
      productDate={product.date}
      productImg={product.productimg}
      productID={product.id}
      teraphist={product.teraphist.name}
      teraphistAdress={product.teraphist.Adress}
      
      
      
      
      />

   ) 
  }
 ) 
}

</div>
<div className="flex flex-row flex-wrap justify-center">
{ (products.length >loadPage || products.length === loadPage) ? 
<button className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" onClick={loadMore}>Ladda fler bokningsbara tider</button>
:
<button className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" onClick={loadLess}>Ladda färre bokningsbara tider</button> }

</div>
</>

)

}

export default CardList;


