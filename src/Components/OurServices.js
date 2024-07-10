import React from 'react';
import Image_1 from "../Images/professional1.jpg";
import Image_2 from "../Images/professional1.jpg";
import Image_3 from "../Images/professional1.jpg";
import '../css/OurServices.css'
import { LuFileStack } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from 'react-router-dom'

const OurServices = () => {
    return (
        <>
            <h1 data-aos="fade-down" data-aos-duration="1000">Our Services</h1>
            <div className="container-fluid mb-5 px-4 px-lg-0 Achieve-pro-main py-5">
                <div
                    className="resume-boxes"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div className="box-1">
                        <LuFileStack className="resume-icons" />
                        <h2>Resume Making </h2>
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
                        <h2>Logo ID kits</h2>
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
                        <h2>Job Advice</h2>
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
            </div>
            <div className="container-fluid mb-5 px-4 px-lg-0 Achieve-pro-main py-5">
                <div
                    className="resume-boxes"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div className="box-1">
                        <LuFileStack className="resume-icons" />
                        <h2>Resume Making </h2>
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
                        <h2>Logo ID kits</h2>
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
                        <h2>Job Advice</h2>
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
            </div>
        </>
    );
};

export default OurServices;
