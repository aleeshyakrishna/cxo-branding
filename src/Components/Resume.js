import React from 'react'
import '../css/Resume.css'
import { LuFileStack } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscArrowRight } from "react-icons/vsc";
import {Link} from 'react-router-dom'
const Resume = () => {
  return (
    <div className="main-resume" id="job">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        Resume Writing Services
      </h1>
      <div
        className="resume-boxes"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="box-1">
          <LuFileStack className="resume-icons" />
          <h2>View Samples </h2>
          <p>
            {" "}
            StandOut with a proffessional resume
            Your resume is your first impression and key to landing your dream job.
            With our exceptional resume writing service, you can differentiate yourself from the competition and make a lasting impact on potential employers.
          </p>
          <Link to="/Resumeform">
            <span>
              Dive Deeper <VscArrowRight />
            </span>
          </Link>
        </div>

        <div className="box-2">
          <GrSettingsOption className="resume-icons" />
          <h2>Our Process </h2>
          <p>
            {" "}
            Our expert team of resume writers will work closely with you to create a compelling and personalized
            resume that highlights your skills, experience, and achievements
            {" "}
          </p>
          <span>
            Dive Deeper <VscArrowRight />
          </span>
        </div>

        <div className="box-3">
          <GiTakeMyMoney className="resume-icons" />
          <h2> Resume Pricing</h2>
          <p>
            Resume services vary in cost and basic options are affordable,
            <br></br> while premium services offer more at a reasonable price.
          </p>
          <Link to="/ResumePrice">
            <span>
              Dive Deeper <VscArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div
        className="bottom-text"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        {/* <h3>Building Your Professional Narrative</h3>
        <p>
          Remember to use action verbs, quantify your achievements where
          possible,<br></br> and customize the resume for each job application.
          Additionally,<br></br> ensure a clean and professional format with
          consistent fonts and spacing. */}
        {/* </p> */}
      </div>
    </div>
  );
}

export default Resume