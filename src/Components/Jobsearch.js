// Jobsearch.js
import React, { useState } from "react";
import "../css/Jobsearch.css";
import Headerimg from "../Images/Headerimg.jpg";
import JobAdviceModal from "./JobAdviceModal"; // Update the path accordingly
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Jobsearch = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.userData.token);
  
  const handleOpenJobform = () => {
    if (token) {
      setModalOpen(true);
    } else {
      navigate("/login");
    }

    
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="job-main-conatiner" id="advice">
      <div className="headline">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Job Search Advice
        </h1>
      </div>
      <div className="text-container">
        <ul className="job">
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
        </ul>
      </div>

      <div
        className="job-box"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="image-container">
          <button className="button" onClick={handleOpenJobform}>
            get job advice
          </button>
          <img src={Headerimg} width={400} alt="" onClick={handleOpenJobform} />
          <p>
            Success often favors those who possess a well-defined career
            strategy and thorough preparation.
          </p>
        </div>
      </div>

      <JobAdviceModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default Jobsearch;
