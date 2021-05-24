import React, {useState, useEffect} from "react";
import { useLocation, Link} from "react-router-dom";
import axios from "axios"
import dateFormat from 'dateformat';

export default function SingleOrder() {
const [myOrder, setMyOrder] = useState([]);

function useQuery() {
        return new URLSearchParams(useLocation().search); 
     }

let query = useQuery();

useEffect (()=>{
    const fetchOrders=async()=> {
    console.log("hejsan", query.get("id"))
    const response = await axios.get(`http://localhost:1337/bookings/${query.get("id")}`)
    
    console.log(response.data.product)
     
    setMyOrder(response.data.product)


   

    
     }
     
     fetchOrders();
    
    }, [])




    return (
        <>
<div className="max-w-sm w-full px-4 py-3 bg-white shadow-md rounded-md my-8">
            <div class="flex justify-between items-center">
                <span className="text-sm font-light text-gray-800">OrderDetaljer/Kvitto</span>
                <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full uppercase text-xs">{dateFormat(myOrder.created_at, "yyyy-mm-dd HH:MM")}</span>
            </div>

            <div>
                <h1 className="text-lg font-semibold text-gray-800 mt-2">{myOrder.name}</h1>
                <p className="text-gray-600 text-sm mt-2"><strong>Pris:</strong> {myOrder.price} SEK. ink moms 25%</p>
                <p className="text-gray-600 text-sm mt-2"><strong>Datum:</strong> {dateFormat(myOrder.date, "yyyy-mm-dd HH:MM")} </p>
            </div>

            <div>
                <div className="flex items-center mt-2 text-gray-700">
                    <span>Kontakta oss på:</span>
                    <Link className="text-blue-600 cursor-pointer mx-2 hover:underline" to="mindsthlm.se/kontakt">mindsthlm.se/kontakt</Link>
                 
                </div>

                <div className="flex items-center justify-center mt-4">
                    

                    
                </div>
            </div>
        </div>



            
        </>
    )
}
