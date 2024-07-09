import React, { useEffect } from 'react'
import BrandingModal from "./BrandingModal";
import VideoResumeModal from "./VideoResumeModal"
import WebsiteModal from "./PersonalisedModal"

import "../css/OurServices.css";
import Kit from "../Images/Kit.png";
import vds from "../Images/vds.png";
import Vdt from "../Images/Vdt.png";
import pwd from "../Images/pwd.png";
import $ from 'jquery';
import 'fancybox';
import '../webpack.config';
import Image_1 from "../Images/professional1.jpg";
import Image_2 from "../Images/professional1.jpg";
import Image_3 from "../Images/professional1.jpg";
const OurServices = () => {



    return (
        <>
            <h1 data-aos="fade-down" data-aos-duration="1000">Our Services</h1>
            <div class="container-fluid mb-5 px-4 px-lg-0 Achieve-pro-main py-5">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-5 p-2">
                            <div class="left-pro-box p-3 p-lg-4">
                            <br/>
                                <img src={Image_1} class="achive-pro-left-img" alt="" />
                                <h3 class="mt-4 fw-bold achieve_h3" style={{ color: 'black' }}>Resume Making</h3>
                               
                                <p class="mb-3 lh-base achieve_p fs-3" style={{ color: 'black' }}>
                                    <p>
                                        {" "}
                                        Our expert team of resume writers will work closely with you to create a compelling and personalized
                                        resume that highlights your skills, experience, and achievements
                                        {" "}
                                    </p>
                                </p>
                            </div>
                        </div>

                        <br />


                        <div class="col-lg-7 p-2 ">
                            <div class="row justify-content-lg-end  align-items-center h-100">

                                <div class="col-lg-11 mb-4 ">
                                    <div class="right-pto-box p-3 p-lg-4">
                                        <div class="row">
                                            <div class="col-lg-7 order-2 order-lg-1">
                                            <br/>
                                                <h3 class="mb-2  achieve_h3" style={{ color: 'black' }} >Job Search Advice</h3>
                                                <br />
                                                <p class="mb-0 achieve_p  fs-4" style={{ color: 'black' }}>
                                                    <p>
                                                        With our exceptional services, you can differentiate yourself from
                                                        the competition and make a lasting impact on potential employers.
                                                        Make a Visual Impact with Video Resumes. In today's competitive job
                                                        market, a traditional resume might not be enough to capture
                                                        attention. Our video resume service allows you to showcase your
                                                        personality, communication skills, and unique qualities in a
                                                        visually engaging format. Our team will help you script, film, and
                                                        edit a professional video resume that will grab the attention of
                                                        hiring managers and leave a lasting impression.
                                                    </p>
                                                </p>
                                            </div>
                                            <button>learn more</button>
                                         
                                            <br />

                                            
                                            <div class="col-lg-5 d-flex align-items-center order-1 order-lg-2 mb-4 mb-lg-0">
                                                <img src={Image_2} class="achive-pro-right-img" alt="" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="col-lg-11 mt-4">
                                    <div class="right-pto-box p-3 p-lg-4">
                                        <div class="row">
                                            <div class="col-lg-7 order-2 order-lg-1">
                                                <br/>
                                                <h3 class="mb-2  achieve_h3" style={{ color: 'black' }}>Personal Branding</h3>
                                                <br/>
                                                <p class="mb-0 achieve_p  fs-4" style={{ color: 'black' }}>
                                                    Build a compelling portfolio showcasing your real-world projects and achievements throughout the program.
                                                    <p>
                                                        With our exceptional resume writing service, you can differentiate
                                                        yourself from the competition <br />
                                                        and make a lasting impact on potential employers.
                                                    </p>
                                                </p>
                                            </div>
                                            <br/>
                                            <div class="col-lg-5 d-flex align-items-center order-1 order-lg-2 mb-4 mb-lg-0">
                                                <img src={Image_3} class="achive-pro-right-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OurServices
