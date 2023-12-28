import React from "react";
import '../css/Personalbranding.css'
import Kit from '../Images/Kit.png'
import vds from '../Images/vds.png'
import Vdt from '../Images/Vdt.png'
import pwd from '../Images/pwd.png'
import Youtube from '../Images/Youtube.png'
const Personalbranding = () => {
  return (
    <div>
        <div className="branding-heading" data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="branding" >
            <h1>Personal Branding Solutions</h1>
            <p></p>Your pesonal brand is very vital to you professionally.<br></br> It is how you present yourself to potential employers. We provide you with solutions to ensure that employers see you in the way you want them to!
        </div>
      <div className="main-branding">
        
        <div className="main-box"  data-aos="zoom-out-right">
            <div className="brand-box-container">
            <div className="brand-box-1">
                <img src={Kit} alt="" width={200} />
            </div>
            <div className="brand-box-2">
                <p>Logo Id Kids</p>
            </div>
            </div>

            <div className="brand-box-container">
            <div className="brand-box-1">
                <img src={vds} alt="" width={200} />
            </div>
            <div className="brand-box-2">
                <p>Video Terminal</p>
            </div>
            </div>


            <div className="brand-box-container">
            <div className="brand-box-1">
                <img src={Vdt} alt="" width={200} />
            </div>
            <div className="brand-box-2">
                <p>Video Resume</p>
            </div>
            </div>



            <div className="brand-box-container">
            <div className="brand-box-1">
                <img src={pwd} alt="" width={200} />
            </div>
            <div className="brand-box-2">
                <p>Personalised<br></br>
websites</p>
            </div>
            </div>



            <div className="brand-box-container">
            <div className="brand-box-1">
                <img src={Youtube} alt="" width={200} />
            </div>
            <div className="brand-box-2">
                <p>Logo Id Kids</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Personalbranding;
