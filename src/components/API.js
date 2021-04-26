import React, {useEffect, useState} from 'react'
import axios from "axios"

function API() {


    const [data, setData] = useState("");

    useEffect(() => {
      const fetchData = async ()=> {
      
     const response = await axios.get ("https://jsonplaceholder.typicode.com/todos/1")

      setData(response.data)
      }
       
    fetchData()
    }, []);


    return (
    <div>
   {data.title}
            
        
    </div>
    )
}

export default API
