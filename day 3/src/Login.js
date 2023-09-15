import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';



export default function Login() {

      const[emailid,setEmailid]= useState('');
      const[password,setPassword]=useState('');
      const navigate=useNavigate('');
      
      const formHandler=(event)=>
      {
        const loginDetails={emailid,password}
        navigate("/signup")
      }
  return (
    <div className='body1'>
    <div className='image1'>
    <div className='rectangle'></div>
    <div className='login'>
    <b>Login</b></div>
    <div className='form'>
    <form onsubmit={formHandler}>

    Email Id: <input Type="text100" value={emailid} placeholder="Email-id" onChange={e=>setEmailid(e.target.value)}/><br/>

    Password: <input Type="text100" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)}/><br/>
    <br/>
    <h4><Button Type="submit" class="but">LOGIN</Button></h4>
    <h4>Don't have an account?</h4>
    <h4><Button type="submit" class="but">Signup</Button></h4>

    </form>
    </div>
    
    
    </div>      
    </div>
  )
}
