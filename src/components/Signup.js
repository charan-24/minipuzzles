import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button';
import '../App.css'
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate} from 'react-router-dom';

function Signup(){
    let navigate = useNavigate();
    const [user,setUser]=useState({
        name:"",email:"",password:""
    });
    const handleInputs=(e)=>{
        //console.log(e);
        let name=e.target.name;
        let value=e.target.value;

        setUser({...user,[name]:value});
    }

    const postData = async (e)=>{
        e.preventDefault();
        const {name, email, password} = user;
        const res= await fetch('/signup',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });
        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid Registration");
        }
        else{
            //window.alert("Registration Successfull");
            navigate('/login');
        }
    }
    return(
        <div className='login w-50 mx-auto'>
        <form  method="POST">
          <h1>Signup</h1>
          <input  type='text' placeholder='*Enter name' name="name" class="name"
            value={user.name}
            onChange={handleInputs}
          />
          <input type='email' placeholder='*Enter email' name= "email" class="email"
            value={user.email}
            onChange={handleInputs}
          />
          <input type='password' placeholder='*Enter password' name ="password" class="password"
            value={user.password}
            onChange={handleInputs}
          />
          <Button variant='primary' type='submit'
          onClick={postData}
          >Signup<IoMdLogIn/></Button>
        </form>
      </div>
    );
}

export default Signup;