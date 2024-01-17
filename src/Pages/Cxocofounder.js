import React from 'react'
import '../css/Cxocofounder.css'
import Cxologo from '../Images/Cxologo.png'
import Cofounder from '../Images/Cofounder.png'
import Joinoc from './Joinoc'
import Empower from './Empower'
import Footer from '../Components/Footer.js'
function Cxocofounder() {
  return (
    <div>
        <div className="main-cofounder-container">
            <div className="cofounder-image">
            <img src={Cxologo} alt="" />
            </div>
            <div className="header-cofounder-main">
            <div className="header-text-cofounder">
                <div className="text-cofounder">

                <h1>Elevating CEOs, Empowering Brands:
                    <br></br>
                    Platform to Shape a Distinctive Legacy
                </h1>
                <p>At Cofounder, we redefine CEO branding with impactful resumes,personalized websites,
                    <br></br>
                customs podcates,and more.  Our mission is to empower leaders authentically for success in 
                <br></br>
                today business landscape
                </p>
                <button className="btn">Create Your Brand </button>

                </div>
                <div className="cofounder-video">
               <img src={Cofounder} alt="" />
                </div>
            </div>
            </div>
       
        </div>

        <Joinoc />
        <Empower />
        <Footer />

    </div>
  )
}

export default Cxocofounder