import React, { useState, useEffect, } from 'react'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function GetMyProfile() {
const [getEmail, setMyEmail] = useState("");
const [getUserName, setMyUserName] = useState("");
const [getUserId, setMyId] = useState("");
const history = useHistory();




  useEffect(() => {
    const fetchInfo = async () => {
      const userId = localStorage.getItem("id");
      const response = await axios.get(`http://localhost:1337/users/${userId}`);
      console.log(response.data)
       
      setMyEmail(response.data.email);
      setMyUserName(response.data.username);
      setMyId(response.data.id)

      
      
    };

    fetchInfo();
  }, []);



  function handleDelete(e) {

    const userId = getUserId
     axios.delete(`http://localhost:1337/users/${getUserId}`)
   
     localStorage.clear();
     history.push("/");
     window.location.reload();
   
   
     }


    return (
        
 <>
<section className="hero">
        <h1> Mina Profil</h1>
      </section>
      

        <h2>{getEmail}</h2>

        <h2>{getUserName}</h2>


        <Link to={`/update-user?id=${getUserId}`}>
                <button className="mt-8 " value={getUserId}  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                 Ändra Kontaktuppgifter
                </button>
        </Link>


        <button value={getUserId} onClick={handleDelete} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Ta bort Konto
        </button>
        
        
        </>
        )
     

            
        
    
}

export default GetMyProfile
