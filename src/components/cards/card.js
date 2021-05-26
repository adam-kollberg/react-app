import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({
  productName,
  productPrice,
  productDate,
  productImg,
  teraphist,
  productID,
  teraphistAdress,
  teraphistId,
}) {
  return (
    <>
      <div className="py-6 mx-6">
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/3 bg-cover">
            {" "}
            <img src={`http://localhost:1337${productImg.url}`} alt="booking" />
          </div>

          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl ">{productName}</h1>
            <h4 className="mt-2 text-gray-600 text-sm">
              <FontAwesomeIcon icon={faUser} /> {teraphist}
            </h4>
            <h4 className="mt-2 text-gray-600 text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {teraphistAdress}
            </h4>

            <p className="mt-2 text-gray-600 text-sm">
              <FontAwesomeIcon icon={faClock} />{" "}
              {dateFormat(productDate, "yyyy-mm-dd  HH:MM")}
            </p>

            <div className="flex item-center mt-2"></div>

            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">
                {productPrice} SEK{" "}
              </h1>

              <Link
                to={`/book?name=${productName}&price=${productPrice}&date=${productDate}&id=${productID}&teraphist=${teraphistId}`}
              >
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Boka nu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
