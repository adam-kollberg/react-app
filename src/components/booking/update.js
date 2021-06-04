import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";




function Update() {

    function useQuery() {

    


        return new URLSearchParams(useLocation().search);
      }

      const history = useHistory();
    
      let query = useQuery();
    
    
      const bookingID = query.get("id");

      const [myBookings, setMyBookings] = useState([]);

      useEffect(() => {
        const fetchBookings = async () => {
          const userId = localStorage.getItem("id");
          const response = await axios.get(`http://localhost:1337/bookings/${bookingID}`);
           
          setMyBookings(response.data);

          console.log(response.data)
          
        };
    
        fetchBookings();
      }, []);

      const bookingValues = {
        name: `${myBookings.name}`,
        email:`${myBookings.email}`,
        
      };

      const [formValues, setFormValues] = useState(bookingValues);

      async function onSubmit(e){
        e.preventDefault();

        const response = await axios.put(`http://localhost:1337/bookings/${bookingID}`, {
          namn: formValues.name,
          email: formValues.email


          
          
        
        });

        console.log(response)
        history.push("/my-bookings")

        

      }



      function onChange(e) {
e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
          console.log(formValues);

      }

     


return (
        <>
        <form onSubmit={onSubmit}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto m-4 flex-2 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h3 className="text-center"><strong>Ändra namn och email på din bokning</strong></h3>

              <input
                type="text"
                value={myBookings.namn}
                className="block border border-black-light w-full p-3 rounded mb-4"
                name="name"
                
                onChange={onChange}
              />

              <input
                type="text"
                value={myBookings.email}
                
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                onChange={onChange}
              />

  
              <button role="link" 
                type="submit"
                className="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
              >
                Ändra bokning
              </button>
             
            </div>
          </div>
        </div>
      </form>
        
        
        </>
    )
}

export default Update
