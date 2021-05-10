import React, { useEffect, useState } from "react";
import axios from 'axios';


function AddCard() {

const initialValue = {
    productname: "",
    price: 0,
    description:"",
    date:"",
    teraphist: ""
  }

  const imgValue = {
    productimg: ""
  }

  const [addProduct, setProduct] = useState(initialValue);
  const [fileData, setFileData] = useState(imgValue);
  const [teraphists, setTeraphist] = useState([]);


  useEffect (()=>{
    const fetchTeraphists=async()=> {
    
    const response = await axios.get("http://localhost:1337/teraphists")
    
    setTeraphist(response.data)
    
    console.log(response);
    
     }
     
     fetchTeraphists();
    
    }, [])


  function imgOnChange(e) {
    console.log(e.target.files[0])
    setFileData(e.target.files[0])
  }


async function onSubmit(e){
e.preventDefault();

const response = await axios.post('http://localhost:1337/products', {
      name: addProduct.productname,
      price: addProduct.price,
      description: addProduct.description,
      date: addProduct.date,
      teraphist: addProduct.teraphist.value,
    })

    console.log(response);
  


const formData = new FormData();
formData.append("files", fileData);
formData.append('ref', 'product')
formData.append('refId', response.data.id)
formData.append('field', 'productimg')



console.log(formData);

axios.post(`http://localhost:1337/upload`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
});


}


function onChange(e) {
  
setProduct({
  ...addProduct,
  
  [e.target.name]: e.target.value});


console.log(addProduct)
  

}


return (
      <>
    <div className="login-box">
  <h2>Add product</h2>
  <form onSubmit={onSubmit}>
  <div className="user-box">
      <input type="text" name="productname" value={addProduct.productname} required="" onChange={onChange}  />
      <label>Session Name</label>
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
      <input type="file" accept="image/png, image/jpeg" name="product" required="" onChange={imgOnChange}  />
      <label>Upload img</label>
    </div>

    <div className="user-box">
      <input type="datetime-local" name="date" required="" onChange={onChange}  />
      <label>Date</label>
    </div>

    <div className="user-box">

    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  
  <select value={addProduct.teraphist} onChange={onChange} name="teraphist"  class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option >Choose a theraphist</option>
    {teraphists.map((teraphist)=>
    <option name="teraphist">{teraphist.name}</option>
    )}
  </select>
  

  </div>
  
  <button class="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Add product</button>
  
  
  </form>
</div>
</>
    
  );
}

export default AddCard;