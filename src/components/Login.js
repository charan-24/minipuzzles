import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button';
import '../App.css'
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate=useNavigate();

  const [user,setUser] = useState({
    email:"",password:""
  });

  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,[name]:value});
  }

  const loginUser = async (e)=>{
    e.preventDefault();
    const {email,password} = user;

    const res = await fetch('/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email,password
        })
    });
    
    const data = await res.json();
    
    if(res.status===400 || !data){
        window.alert("Invalid Credentials");
    }
    else{
        //window.alert("Login Successfull");
        navigate('/jigsaw');
    }
  }

  
  return (
    <div className='login w-50 mx-auto '>
      <form method="POST">
        <h1>Login</h1>
        <input type='email' placeholder='*Enter email' name="email"onChange={handleInput} /> 
        <input type='password' placeholder='*Enter password' name="password" onChange={handleInput}/>
        <Button variant='primary' type='submit' onClick={loginUser}>Login <IoMdLogIn/></Button>
      </form>
    </div>
  )
}

export default Login;
