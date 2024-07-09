// Personalbranding.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BrandingModal from "./BrandingModal";
import VideoResumeModal from "./VideoResumeModal"
import WebsiteModal from "./PersonalisedModal"
import "../css/Personalbranding.css";
import Kit from "../Images/Kit.png";
import vds from "../Images/vds.png";
import Vdt from "../Images/Vdt.png";
import pwd from "../Images/pwd.png";
import Youtube from "../Images/Youtube.png";
import { HiHand } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Personalbranding = () => {
  const [logoIdModalOpen, setLogoIdModalOpen] = useState(false);
  const [videoTestimonialModalOpen, setVideoTestimonialModalOpen] =
    useState(false);
  const [videoResumeModalOpen, setVideoResumeModalOpen] = useState(false);
  const [websiteModalOpen, setWebsiteModalOpen] = useState(false);

  const token = useSelector((state) => state.userData.token);
  const navigate = useNavigate();

  const openLogoIdModal = () => { 
    if (token) {
      setLogoIdModalOpen(true);
    } else {
      navigate("/login");
    }
  }
  const closeLogoIdModal = () => setLogoIdModalOpen(false);

  const openVideoTestimonialModal = () => {
     if (token) {
       setVideoTestimonialModalOpen(true);
    }
     else {
       navigate("/login");
    }
  }
  const closeVideoTestimonialModal = () => setVideoTestimonialModalOpen(false);

    const openWebsiteModal = () => {
      if (token) {
        setWebsiteModalOpen(true);
      } else {
        navigate("/login");
      }
  }
  const closeWebsiteModal = () => setWebsiteModalOpen(false);
   
  

  const openVideoResumeModal = () => {
    if (token) {
      setVideoResumeModalOpen(true);
    } else {
      navigate("/login");
    }
  } 
  const closeVideoResumeModal = () => setVideoResumeModalOpen(false);

  const handleOnclick = () => {
    openLogoIdModal();
  };

  const handleOnclickVideo = () => {
    openVideoTestimonialModal();
  };

  const handleOnclickWebsite = () => {
    openVideoResumeModal();
  };
  const handleOnclickPersonal = () => {
    openWebsiteModal();
  };



  return (
    <div>
      <div
        className="branding-heading"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
        id="branding"
      >
        <h1>Personal Branding Solutions</h1>
        <p>
          Enhance Your Personal Brand with a Personalized Website In today's
          digital world, a personalized website is a powerful tool for
          showcasing your skills, portfolio, and accomplishments. Our website
          management service will design and develop a stunning website that
          reflects your unique personal brand. With a professionally crafted
          website, you can leave a lasting impression on potential employers and
          create new opportunities for career growth.
        </p>
      </div>

      <div className="main-branding">
        <div className="main-box" data-aos="zoom-out-right">
          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclick}>
              <img src={Kit} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Logo Id Kits</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickVideo}>
              <img src={vds} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Testimonial</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickWebsite}>
              <img src={Vdt} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Resume</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickPersonal}>
              <img src={pwd} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Personalised websites</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BrandingModal
        isOpen={logoIdModalOpen}
        onRequestClose={closeLogoIdModal}
        handleSubmit={() => {
          // Handle form submission logic for Logo Id Kit
          // ...
          closeLogoIdModal(); // Close the modal after submission
        }}
      />

      <BrandingModal
        isOpen={videoTestimonialModalOpen}
        onRequestClose={closeVideoTestimonialModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Testimonial
          // ...
          closeVideoTestimonialModal(); // Close the modal after submission
        }}
      />

      <VideoResumeModal
        isOpen={videoResumeModalOpen}
        onRequestClose={closeVideoResumeModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Resume
          // ...
          closeVideoResumeModal(); // Close the modal after submission
        }}
      />

      <WebsiteModal
        isOpen={websiteModalOpen}
        onRequestClose={closeWebsiteModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Resume
          // ...
          closeWebsiteModal(); // Close the modal after submission
        }}
      />
    </div>
  );
};

export default Personalbranding;
