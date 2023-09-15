import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';
import { Button } from '@mui/material';
import './login.css';

export default function Login() {
    const nav=useNavigate("");
    const[emailid,setEmailid]= useState('');
    const[password,setPassword]=useState('');
   
    
    const formHandler=(event)=>
    {
      const loginDetails={emailid,password}
      event.preventDefault();
      if(emailid.length==0)
      {
        alert("Enter email id");
      }
      else if(password.length==0)
      {
        alert("Enter the password");
      }
     
    }
  return (
    <div className='body1'>
    <div className='pic'>
    <img src="https://img.freepik.com/free-photo/abstract-blur-hotel-interior_1203-8529.jpg" height="735px" width="1525px"></img></div>
    <div className='rectangle'></div>
    <div className='login'>
    <b>LOGIN</b></div> 

    <div className='form'>
    <form onSubmit={formHandler}>
    
    Email Id: <input type="text100" value={emailid} placeholder="Email-id" onChange={e=>setEmailid(e.target.value)}/><br/>
    
    <br/>
    Password: <input type="password300" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)}/><br/>

    <h5><Button type="submit" class='but'>LOGIN</Button></h5><br/>
    <h5><center>Don't have an account?</center></h5>
   <Link to="/signup"> <h5><Button type="submit" class='but'>SIGNUP</Button></h5></Link><br/>
    </form></div>
    </div>



    
  )
}
