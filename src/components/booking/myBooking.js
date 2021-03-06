import React, { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BookingList() {
  const [myBookings, setMyBookings] = useState([]);

  const [getRole, setRole] = useState("");

  useEffect(() => {
    const Role = localStorage.getItem("role");
    setRole(Role);
  }, []);
  

  useEffect(() => {
    const fetchBookings = async () => {
      const userId = localStorage.getItem("id");
      const response = await axios.get(`http://localhost:1337/bookings?_where[users_permissions_user]=${userId}`);
       
      setMyBookings(response.data);
      
    };

    fetchBookings();
  }, []);


  function handleDelete(e) {

 const {value} = e.target;
  axios.delete(`http://localhost:1337/bookings/${value}`)

  window.location.reload();


  }

  return (
    <>
      <section className="hero">
        <h1> Mina Bokningar</h1>
      </section>
      {myBookings.map((bookings) => {
        return (
          <div key={bookings.id} className="py-6 mx-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {" "}
                  Order ID: {bookings.id}{" "}
                </h1>

                <p className="mt-2 text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faUser} /> <strong>Namn på order:</strong> {bookings.namn}
                </p>

                <p className="mt-2 text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faClock} />{" "}
                  <strong>Datum & tid:</strong> {dateFormat(bookings.published_at, "yyyy-mm-dd  HH:MM")}
                </p>


                

                <p className="mt-2 text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faCheckSquare} /> <strong>Session:</strong> {bookings.product.name}
                </p>

                <p className="mt-2 text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faUser} /><strong>Terapeut:</strong> {bookings.teraphist.name}
                </p>

                <div className="flex item-center mt-2"></div>

                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {bookings.price} SEK{" "}
                  </h1>

                  
                </div>
               
                <h3>för att avboka din bokning mejla: info@mindsthlm.se</h3>
              </div>
            </div>
           
          </div>
        );
      })}
    </>
  );
}

export default BookingList;
