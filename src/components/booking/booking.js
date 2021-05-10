import React, { useState } from "react";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import dateFormat from 'dateformat';
import axios from "axios";


function Booking() {
  
function useQuery() {
    return new URLSearchParams(useLocation().search); 
 }
  function Heading({ Heading }) {
    return <h1 className = "mb-8 text-2xl text-center">{Heading}</h1>;
  }

  function Price({ Price }) {
    return <h3 className = "mb-8 text-1xl text-center">{Price} <span>sek</span></h3>;
  }

  function Date({ Date }) {
    return <h3 className = "mb-8 text-1xl text-center">{Date} <span></span></h3>;
  }


  
  
  let query = useQuery();


  const bookingValues = {
    name: "",
    email: "",
    adress: "",
    phone: "",
    
    
   
    
  }

  const [formValues, setFormValues] = useState(bookingValues);

  async function onSubmit(e) {
    e.preventDefault();

    const response = await axios.post('http://localhost:1337/bookings', {
      namn: formValues.name,
      email: formValues.email,
      adress: formValues.adress,
      phone: formValues.phone,
      price: query.get("price"),
      date: query.get("date"),
      product: query.get("id"),

      
    })

    console.log(response)
  

    
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      
    });
   console.log(formValues)
  }

  return (
<>
<section className="hero">
<h1>Boka</h1>
</section>


<form onSubmit={onSubmit}>

<div class="bg-grey-lighter min-h-screen flex flex-col">

            <div class="container max-w-sm mx-auto m-4 flex-2 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    
                    <Heading Heading={query.get("name")}/>
                    <Price Price={query.get("price")}/>
                    <Date Date={dateFormat(query.get("date"))}/>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name"
                        onChange={onChange} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={onChange} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="adress"
                        placeholder="Adress" 
                        onChange={onChange}/>
                    <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        placeholder="Telefon"
                        onChange={onChange} />
                      



                    <button
                        type="submit"
                        className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Boka</button>
                        
                    
                </div>

                
            </div>
        </div>
        </form>





        
    </>
  );
}

export default Booking;