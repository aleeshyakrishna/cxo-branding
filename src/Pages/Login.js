import React from 'react'
import '../css/Login.css'
import {Link} from 'react-router-dom'
import Loginpic from '../Images/Loginpic.jpg'
const Login = () => {
  return (
    <div>
         <div className="log-animation">
    <img src={Loginpic} alt="" />
    </div>
       <div className="from-text">
        <h1>Login</h1>
       
            
            <input type='text' placeholder='Enter Your Email'/>
            
         
            <input type='passWord' placeholder='Enter your Password'/>
         
            <button className='sub-btn'>Submit</button>
          <p>You Did'n signin <Link to='/Signin'>Click Here......</Link></p>
    </div>
 
    </div>
    
  )
}

export default Login