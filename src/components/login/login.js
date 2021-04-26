import React, {useState} from "react";
import LoginForm from "./loginForm"
import {NavLink} from "react-router-dom";
//import Form from "./Form"

function LoginUser(){
    const[user, setUser] = useState({ email:""});

    const adminUser = {
        email:"adam@adam.se",
        password:"adam-kollberg"
    }
    
    const Login = (props) => {
        
        console.log(props)
       
        setUser({
            ...user,
            email: props.email,
            
        });
        
    }

    return(
        

        
        <div className="Login">
        {(user.email !== "") ? ( 
            <div className="welcome">
            <h2>WELCOME, <span>{user.email}</span></h2>
            <button className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400 focus:shadow-outline focus:outline-none">Logout</button>
                
            </div>

         
            
       
              
    ) : (
        
       <LoginForm props={Login}/>
       
        )}

    </div>
    )
    
    }


export default LoginUser;