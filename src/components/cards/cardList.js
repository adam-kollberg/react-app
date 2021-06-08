import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";



function CardList() {
  const [loadPage, setLoadPage] = useState(6);
  const [products, setProducts] = useState([]);
  
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `http://localhost:1337/products?_limit=${loadPage}`
      );

      setProducts(response.data);

      console.log(response);
    };

    fetchProducts();
  },[loadPage] );


  function loadMore() {
    let dynamicPage = loadPage + 1;
    setLoadPage(dynamicPage);
  }


  function loadLess() {
  
    setLoadPage(5);
    
  }
  

 

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              productName={product.name}
              productPrice={product.price}
              productDate={product.date}
              productImg={product.productimg}
              productID={product.id}
              teraphist={product.teraphist.name}
              teraphistAdress={product.teraphist.Adress}
              teraphistId={product.teraphist.id}
            />
          );
        })}


        
      </div>


      <div className="flex flex-row flex-wrap justify-center">
        {products.length > loadPage || products.length === loadPage ? (
          <button
            className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            onClick={loadMore}
          >
            Ladda fler bokningsbara tider
          </button>
        ) : (
          <button
            className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            onClick={loadLess}
          >
            Ladda färre bokningsbara tider
          </button>
        )}
     </div>
      
    </>
  );
}

export default CardList;
