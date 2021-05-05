import React, {useEffect, useState} from 'react'
import axios from "axios"

function API() {

axios.get('http://localhost:1337/products').then(response => {
    console.log(response);
  });
   


    return (
    <div>
   
            
        
    </div>
    )
}

export default API
