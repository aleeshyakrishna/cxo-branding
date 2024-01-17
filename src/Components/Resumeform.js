import React, { useState } from "react";
import ResumePopupForm from "./ResumePopupForm"; // Import the new component
import resumeA from "../Images/resumeA.jpg";
import resumeB from "../Images/resumeB.jpg";
import resumeC from "../Images/resumeC.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../css/resumeform.css";

const Resumeform = () => {
  const [popUp, setpopUp] = useState(null);

  const handleClick = (index) => {
    setpopUp(index);
  };

  const closePopup = () => {
    setpopUp(null);
  };

  return (
    <div>
      <div className="resume-heading">
        <h1>View Sample</h1>
      </div>
      <div className="resume-images">
        {[
          { image: resumeA, index: 0 },
          { image: resumeB, index: 1 },
          { image: resumeC, index: 2 },
        ].map((resume, index) => (
          <div key={index} className="resume-image-container">
            <img src={resume.image} alt="" />
            <div className="resume-btn">
              <button onClick={() => handleClick(resume.index)}>
                Get Yours
              </button>
            </div>
          </div>
        ))}
      </div>

      {popUp !== null && <ResumePopupForm closePopup={closePopup} />}
    </div>
  );
};

export default Resumeform;
