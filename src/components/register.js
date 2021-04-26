import React, {useState} from "react";
import RegisterForm from "./registerForm"
import {Link} from "react-router-dom";

//import Form from "./Form"

function RegisterUser(){
    const[user, setUser] = useState({ email:""});

    const adminUser = {
        email:"adam@adam.se",
        password:"adam-kollberg"
    }
    
    const Register = (props) => {
        
        console.log(props)
       
        setUser({
            ...user,
            email: props.email,
        
            
        });
        
    }

    return(
        

        
        <div className="register">
        {(user.email !== "") ? ( 
            <div className="welcome">
            <h2>You succesfully registred, <span>{user.email}</span></h2>
            <Link to="/login">
            <button className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400 focus:shadow-outline focus:outline-none">Go to log in</button>
           </Link>
            </div>

         
            
       
              
    ) : (
        
       <RegisterForm props={Register}/>
       
        )}

    </div>
    )
    
    }


export default RegisterUser;