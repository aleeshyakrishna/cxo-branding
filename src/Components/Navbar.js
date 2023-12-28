import React, { useState } from 'react'
import '../css/Navbar.css';
import Cxologo from '../Images/Cxologo.png'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [open,setOpen]  = useState(false);
    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen (false)

  return (
    <div>
        <div className="main-navbar-container" id='home'>
            <nav data-aos="fade-down"  data-aos-duration="3000" >
               <div className="nav-logo">
                <p>CXO</p> 
                <span>Brading</span>
               </div>
                <ul className={open ?'nav-links ':'nav-links active'}>
                  <li onClick={closeMenu}>Home</li>
                  <li onClick={closeMenu}>Jobs</li>
                    <li onClick={closeMenu}>Message</li>
                    <li onClick={closeMenu}>About</li>
                    <li onClick={closeMenu}>Contact</li>

                 
                        
                </ul>
                <ul className='nav-log'>
                        <Link to='/Login'><li>Login</li></Link>
                 <Link to='/Signin' > <li>SignIn</li></Link>
                  </ul>
                <div className="nav-icons" onClick={handleClick}>
              {open ? <GrClose />:<HiOutlineMenuAlt1 />  }  
                
                </div>
            </nav>
        </div>

    </div>
  )
}

export default Navbar