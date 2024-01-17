import React, { useState } from 'react'
import '../css/joinoc.css'
import cofounder from '../Images/cofounder.jpg'
import menterhub  from '../Images/menterhub.jpg'
import cofunder from '../Images/cofunder.jpg'
import { VscArrowCircleRight } from "react-icons/vsc";
import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


import { PiHandshakeBold } from "react-icons/pi";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Joinoc = () => {
    const [counder,setCounder]=useState(false)
  return (
    <div>
   
     <div className="main-join-cofouder">
          <div className="join-cofounder">
          <div className="cofounder-heading">
        <h1>Join Our Community</h1>
    </div>
            <div className="join-co-box">
                <div className="co-box-1">
                    <img src={menterhub} alt="" />
                    <h1>Mentor Hub</h1>
                    <p>Join us for accelerated career
                    growth and impactful connection, creating a dynamic 
                    space where success is fostered
                    collaboratively
                    </p>
                    <VscArrowCircleRight className='cofounder-icons'/>
                </div>
                <div className="co-box-2">
                    <img src={cofounder} alt="" />
                    <h1>Cofounder Hub</h1>
                    <p>Where  visionary learders converge
                        to forge partnership, Share expertise ,
                        and propel ventures  to new height
                    </p>
                    <VscArrowCircleRight className='cofounder-icons'/>
                </div>
                <div className="co-box-3">
                    <img src={cofunder} alt="" />
                    <h1>Cofundr Hub</h1>
                    <p>Join us for accelerated career
                    growth and impactful connection, creating a dynamic 
                    space where success is fostered
                    collaboratively
                    </p>
                    <VscArrowCircleRight className='cofounder-icons'/>
                </div>
            </div>

                <div className="number-box">
                    <ScrollTrigger onEnter={()=>setCounder(true)} onExit={()=>setCounder(false)}>
                    <h1>
                        {counder &&  <Countup start={0} end={50} duration={2} delay={0}></Countup>}
                       
                    </h1>
                    <p>Co-Founder</p>
                    <PiHandshakeBold className='number-icons'/>
                    
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounder(true)} onExit={()=>setCounder(false)}>
                    <h1>
                        {counder &&  <Countup start={0} end={100} duration={2} delay={0}></Countup>}
                       
                    </h1>
                    <p>Freelancer</p>
                    <RiHomeOfficeLine  className='number-icons'/>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounder(true)} onExit={()=>setCounder(false)}>
                    <h1>
                        {counder &&  <Countup start={0} end={99} duration={2} delay={0}></Countup>}
                       
                    </h1>
                    <p>investors</p>
                    <FaHandHoldingDollar  className='number-icons'/>
                    </ScrollTrigger>


                    <ScrollTrigger onEnter={()=>setCounder(true)} onExit={()=>setCounder(false)}>
                    <h1>
                        {counder &&  <Countup start={0} end={69} duration={2} delay={0}></Countup>}
                       
                    </h1>
                    <p>Mentors</p>
                    <BsFillBriefcaseFill className='number-icons'/>
                    </ScrollTrigger>
                </div>

            </div>  
     </div>

    </div>
  )
}

export default Joinoc