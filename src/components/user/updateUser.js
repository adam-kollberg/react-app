import React, { useState, useEffect  } from "react";
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";


function UpdateUserForm() {
    function useQuery() {

    


        return new URLSearchParams(useLocation().search);
      }

      const history = useHistory();
    
      let query = useQuery();
    
    
      const userId = query.get("id");

      const [myUsers, setMyUser] = useState([]);

      useEffect(() => {
        const fetchUsers = async () => {
          const userId = localStorage.getItem("id");
          const response = await axios.get(`http://localhost:1337/users/${userId}`);
           
          setMyUser(response.data);

          console.log(response.data)
          
        };
    
        fetchUsers();
      }, []);

      const userValues = {
        username: myUsers.username,
        email: myUsers.email,
        
      };

      const [formValues, setFormValues] = useState(userValues);

      async function onSubmit(e){
        e.preventDefault();

        const response = await axios.put(`http://localhost:1337/users/${userId}`, {
          username: formValues.username,
          email: formValues.email


          
          
        
        });

        console.log(response)
        history.push("/my-profile")

        

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
            <h3 className="text-center"><strong>Ändra kontaktuppgifter</strong></h3>

              <input
                type="text"
                placeholder={userValues.username}
                className="block border border-black-light w-full p-3 rounded mb-4"
                name="username"
                
                onChange={onChange}
              />

              <input
                type="text"
                placeholder={userValues.email}
                
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

export default UpdateUserForm;
