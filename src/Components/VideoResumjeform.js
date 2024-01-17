import React from 'react'

const VideoResumjeform = () => {
  return (
    <div>
      <div className="container">
        <div className="form_area1">
          <p className="title1">GET VIDEO RESUME</p>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
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
                // value={formData.fullname}
                // onChange={handleChange}
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
                // value={formData.socialmedialink}
                // onChange={handleChange}
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
                // onChange={handleFileChange}
              />
            </div>
            <div className="form_group1">
              <input
                type="checkbox"
                id="wantComplimentaryCall"
                name="wantComplimentaryCall"
                // checked={formData.wantComplimentaryCall}
                // onChange={handleChange}
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
    </div>
  );
}

export default VideoResumjeform