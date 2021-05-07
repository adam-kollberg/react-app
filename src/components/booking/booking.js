import React, { useState } from "react";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

import API from "../API"

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


  
  
  let query = useQuery();


  const bookingValues = {
    name: "",
    email: "",
    adress: "",
    phone: "",
    date: "",
    time:"",
    
  }

  const [formValues, setFormValues] = useState(bookingValues);

  function onSubmit(e) {
    e.preventDefault();
    
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





<form>

<div class="bg-grey-lighter min-h-screen flex flex-col">

            <div class="container max-w-sm mx-auto m-4 flex-2 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    
                    <Heading Heading={query.get("name")}/>
                    <Price Price={query.get("price")}/>
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
                        class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1">
                          Boka nu</button>
                        
                    
                </div>

                
            </div>
        </div>
        </form>





        
    </>
  );
}

export default Booking;