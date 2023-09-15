import React, { useState } from 'react'
import { Button } from '@mui/material';
import './Signup.css';

export default function Signup() {
    const[name,setName]=useState('');
    const[phoneno,setPhoneno]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const formHandler=(event)=>
    {
        const signupDetails={name,phoneno,email,password}
        event.preventDefault();
        if(name.length===0)
        {
            alert("Enter the user name");
        }
        else if(phoneno.length===0)
        {
            alert("Enter the phone number");
        }
        else if(email.length===0)
        {
            alert("Enter the email");
        }
        else if(password.length===0)
        {
            alert("Enter the password");
        }
    }
  return (
    <div className='body2'>
    <div className='pic1'>
    <img src="https://thumbs.dreamstime.com/b/business-blur-background-office-building-lobby-hall-interior-white-empty-room-blurry-light-glass-wall-window-business-273363289.jpg" height="735px" width="1525px"></img></div>
    <div className='rectangle1'></div>
    <div className='signup'>
    <b>SIGNUP</b></div> 

    <div className='form'>
    <form onSubmit={formHandler}>

    Name: <input Type="text30" value={name} placeholder="Name" onChange={e=>setName(e.target.value)}/><br/><br/>

    Phone No: <input type="text15" value={phoneno} placeholder="phone no" onChange={e=>setPhoneno(e.target.value)}/><br/><br/>
    
    Email Id: <input type="text100" value={email} placeholder="Email-id" onChange={e=>setEmail(e.target.value)}/><br/><br/>
    
    Password: <input type="password300" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)}/><br/>
    
    <br/>
    <h5><Button type="submit" class='but'>REGISTER</Button></h5><br/>
    </form></div>
    </div>

  )
}
