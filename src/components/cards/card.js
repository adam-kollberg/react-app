import React, {useState} from "react";
import {Link, useParams, Switch} from "react-router-dom"
import dateFormat from 'dateformat';
import Modal from 'react-modal';




export default function Card ({productName, productPrice, productDate, productImg, teraphist, productID }) {
    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };



      const [modalIsOpen,setIsOpen] = useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
     
    
      function closeModal(){
        setIsOpen(false);
      }

return(
<>

<div className="py-6 mx-6" >

<div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">

<div className="w-1/3 bg-cover" > <img src={`http://localhost:1337${productImg.url}`} alt="some image from database"/>

</div>

<div className="w-2/3 p-4">

<h1 className="text-gray-900 font-bold text-2xl adam">{productName}</h1>
<h1 className="text-gray-400 font-bold text-1xl adam">Terapeut: {teraphist}</h1>

<p className="mt-2 text-gray-600 text-sm">{dateFormat(productDate)}</p>





<div className="flex item-center mt-2">



</div>

<div className="flex item-center justify-between mt-3">

<h1 className="text-gray-700 font-bold text-xl">{productPrice} SEK </h1>



<Link to= {`/book?name=${productName}&price=${productPrice}&date=${productDate}&id=${productID}`}>
<button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Boka nu</button>
</Link>


<div>
<button onClick={openModal} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Boka nu 2</button>
<Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >  
        
        <button onClick={closeModal}>close</button>
        <h1 className = "mb-8 text-1xl text-center">{productName}</h1>
        <h3 className = "mb-8 text-1xl text-center">{productPrice}</h3>
        <h3 className = "mb-8 text-1xl text-center">{dateFormat(productDate)}</h3>
        <form>
        <div class="container max-w-sm mx-auto m-4 flex-2 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name"
                         />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                         />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="adress"
                        placeholder="Adress" 
                        />
                    
          </div>
          </div>
        </form>
      </Modal>
</div>


</div>

</div>

</div>

</div>



</>
)

}