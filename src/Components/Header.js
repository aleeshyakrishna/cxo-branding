import React from "react";
import "../css/Header.css";
import Headerimg from "../Images/Headerimg.jpg";
import { FaFileSignature } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div>
      <div className="header-main">
        <div className="header-text-container">
          <div
            className="header-txt"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1>Sprint to Dream</h1>
            <br></br>
            <span>With Your Quick </span>
            <br></br>
            <h1>Job Guide</h1>
            <p>
              Navigate Your Journey to Your Dream Job Globally, Exploring{" "}
              <br></br>Opportunities Across Countries and Varied Job Positions,
              Crafting a Path to a Better Life.
            </p>
          </div>
          <div className="header-image">
            <img src={Headerimg} alt="" />
          </div>
        </div>
        <div className="header-bottom-box">
          <ul
            className="header-box"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Link to="job"  smooth={true} offset={200} duration={1000}>
              <li>
                {" "}
                <FaFileSignature className="hrd-icons" /> Resume Writing
              </li>{" "}
            </Link>
            <div className="line"></div>
            <Link to="advice"  smooth={true} offset={200} duration={1000}>
            <li>
              {" "}
              <MdOutlineScreenSearchDesktop className="hrd-icons" /> job Search
              Advice
            </li>{" "}
            </Link>
            <div className="line"></div>
            <Link to="branding"  smooth={true} offset={200} duration={1000}><li>
              {" "}
              <SlBadge className="hrd-icons" />
              personal Branding
            </li></Link>
            <div className="line"></div>
            <Link to="manage"  smooth={true} offset={200} duration={4000}><li>
              {" "}
              <LiaLinkedin className="hrd-icons" />
              Social Media
            </li>
            </Link>
          </ul>
        </div>
        <div className="yellow-bg"></div>
      </div>
    </div>
  );
};

export default Header;
