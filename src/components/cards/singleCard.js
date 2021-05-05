import {React, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'




function singleCard() {
const [products, setProducts] = useState([]);


useEffect (()=>{
const fetchProducts=async()=> {
    
 const response = await axios.get("http://localhost:1337/products")
    
setProducts(response.data)
    
     }

     fetchProducts();
    
    }, [])


const product








    return (
        <div>
            
        </div>
    )
}

export default singleCard
