import React, { useState } from "react";
import "../css/JobAdviceForm.css"
const JobAdvice = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    socialmedialink: "",
    resume: null,
    wantComplimentaryCall: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("socialmedialink", formData.socialmedialink);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append(
      "wantComplimentaryCall",
      formData.wantComplimentaryCall
    );

    // Send formDataToSend to the server using a POST request

    console.log("Form submitted:", formDataToSend);
  };

  return (
    <div className="container">
      <div className="form_area1">
        <p className="title1">GET JOB SEARCH ADVICE</p>
        <form onSubmit={handleSubmit}>
          <div className="form_group1">
            <label className="sub_title1" htmlFor="fullname">
              Full Name
            </label>
            <input
              placeholder="Enter your full name"
              className="form_style1"
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="form_group1">
            <label className="sub_title1" htmlFor="socialmedialink">
              Social Media Link
            </label>
            <input
              placeholder="Enter your social media link"
              className="form_style1"
              type="text"
              id="socialmedialink"
              name="socialmedialink"
              value={formData.socialmedialink}
              onChange={handleChange}
            />
          </div>
          <div className="form_group1">
            <label className="sub_title1" htmlFor="resume">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
            />
          </div>
          <div className="form_group1">
            <input
              type="checkbox"
              id="wantComplimentaryCall"
              name="wantComplimentaryCall"
              checked={formData.wantComplimentaryCall}
              onChange={handleChange}
            />
            <label className="sub_title1" htmlFor="wantComplimentaryCall">
              I want a complimentary call
            </label>
          </div>
          <div>
            <button className="btn1" type="submit">
              SUBMIT
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobAdvice;
