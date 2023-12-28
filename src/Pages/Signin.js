import React from 'react'
import '../css/Signin.css'
// import Lottie from 'react-lottie';
// import Login from '../Animation/Login.json'
import Signinpic from '../Images/Signinpic.jpg'
import Login from '../Pages/Login.js'
import {Link} from 'react-router-dom'
const Signin = () => {
  return (
    <div>
    <div className="container">
    <div className="from-text">
        <h1>Signin</h1>
       
            <input type='text' placeholder='Enter Your Name' />
            
            <input type='text' placeholder='Enter Your Email'/>
            
         
            <input type='text' placeholder='Re enter Your Email'/>
         
            
            <input type='text' placeholder='Mobile Number'/>
            <button className='sub-btn'>Submit</button>
        
          <p>already Signin <Link to='/Login'>Click Here......</Link></p>
    </div>
    <div className="log-animation">
    <img src={Signinpic} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Signin