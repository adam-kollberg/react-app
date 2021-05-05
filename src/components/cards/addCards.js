import React, { useEffect, useState } from "react";
import axios from 'axios';


function AddCard() {

  const initialValue = {
    productname: "",
    price: 0,
    description:"",
    productimg:"",
    date:""
  }

  const[addProduct, setProduct] = useState(initialValue);

function onSubmit(e){
e.preventDefault();
axios.post('http://localhost:1337/products', {
      name: addProduct.productname,
      price: addProduct.price,
      description: addProduct.description,
      productimg: "localhost:1337/uploads" + addProduct.productimg,
      date: addProduct.date,
    })
  .then (response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);


  })

  

  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);

    
  });
 
}


function onChange(e) {
  
setProduct({
  ...addProduct,
  
  [e.target.name]: e.target.value});

}





return (
      <>
    <div className="login-box">
  <h2>Add product</h2>
  <form onSubmit={onSubmit}>
  <div className="user-box">
      <input type="text" name="productname" value={addProduct.productname} required="" onChange={onChange}  />
      <label>ProductName</label>
    </div>
    <div className="user-box">
      <input type="number" name="price" value={addProduct.price} required="" onChange={onChange}  />
      <label>Price</label>
    </div>
    
   <div className="user-box">
      <input type="text" name="description" value={addProduct.description} required="" onChange={onChange}  />
      <label>description</label>
    </div>
    <div className="user-box">
      <input type="file" accept="image/png, image/jpeg" name="product" required="" onChange={onChange}  />
      <label>Upload img</label>
    </div>

    <div className="user-box">
      <input type="date" name="date" required="" onChange={onChange}  />
      <label>Date</label>
    </div>
    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      REGISTER
    </button>
  
  
  </form>
</div>
</>
    
  );
}

export default AddCard;