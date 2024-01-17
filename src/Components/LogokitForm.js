import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LogokitForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      socialmedialink: "",
      wantComplimentaryCall: false,
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      socialmedialink: Yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        setSubmitting(true);
        const response = await axios.post(
          "http://localhost:4000/api/post-logokit", // Replace with your backend API endpoint
          values
        );

        if (response.data.success) {
          console.log("Data submitted successfully");
          // Add any further actions you want to perform after successful submission
        } else {
          console.error("Unsuccessful response:", response.data);
          // Handle unsuccessful response
        }
      } catch (error) {
        console.error("Error during form submission:", error.message);
        // Handle error
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <div className="container">
        <div className="form_area1">
          <p className="title1">GET LOGO KIT</p>
          <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <div className="error-message">{formik.errors.fullname}</div>
              )}
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
                value={formik.values.socialmedialink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.socialmedialink &&
                formik.errors.socialmedialink && (
                  <div className="error-message">
                    {formik.errors.socialmedialink}
                  </div>
                )}
            </div>
            <div className="form_group1">
              <input
                type="checkbox"
                id="wantComplimentaryCall"
                name="wantComplimentaryCall"
                checked={formik.values.wantComplimentaryCall}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="sub_title1" htmlFor="wantComplimentaryCall">
                I want a complimentary call
              </label>
            </div>
            <div>
              <button className="btn1" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogokitForm;
