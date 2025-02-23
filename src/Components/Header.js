import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/Header.css";
import Headerimg from "../Images/Headerimg.jpg";
import ResumeWriting from "../Images/resume-writing.png";
import JobAdvice from "../Images/job-search.png";
import PersonalBranding from "../Images/personal-branding.png";
import Cofounder from "../Images/professional1.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="header-main">
        <div className="header-text-container">
          {/* <Link to="/Cxocofounder" className="hdr-img">
            <img  alt="" />
          </Link> */}
          </div>
          <div className="buttonDivs">

         <Link to='our'> <button >Looking for job?</button> </Link> <br/>
          <br/>
          
          <Link to='branding'><button >Start something on Myown</button></Link>
          </div>

        










          {/* <div className="header-image">
              <iframe
                className="adpatation-to-mobile-yt-video"
                src="https://www.youtube.com/embed/MSzppjFe1iM?si=-Bm6Z01t75zFvvZz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div> */}
        
        {/* <div className="header-bottom-box">
          <ul
            className="header-box"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <img
                  src={ResumeWriting}
                  className="hrd-icons"
                  alt="Resume Writing"
                />
                <p>
                  Resume <br /> Writing
                </p>
              </li>
            </Link>
            <div className="line"></div>
            <Link
              activeClass="active"
              to="advice"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <img src={JobAdvice} className="hrd-icons" alt="Job Advice" />
                <p>
                  Job <br /> Advice
                </p>
              </li>
            </Link>
            <div className="line"></div>
            <Link
              activeClass="active"
              to="branding"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <img
                  src={PersonalBranding}
                  className="hrd-icons"
                  alt="Personal Branding"
                />
                <p>
                  Personal <br /> Branding
                </p>
              </li>
            </Link>
          </ul>
        </div> */}
        {/* <div className="yellow-bg"></div> */}
        <div
            className="header-txt"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1>Creating </h1>
            <h1>CXO Stories</h1>
            <p>
              With our exceptional resume writing service, you can differentiate
              yourself from the competition <br />
              and make a lasting impact on potential employers.
            </p>
          </div>
      </div>
      
    </div>

  );
};

export default Header;
