import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../css/Login.css";
// import { GoogleLogin } from "react-google-login";
import axios from "../Axios/axios.js";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUserDetails, setTokens } from "../redux/userReducer.js";
import Loginpic from '../Images/Loginpic.jpg'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getTokenFromUrl = async () => {
      try {
        const token = new URLSearchParams(location.search).get("token");
        console.log("token in google login", token)
        if (token) {
          localStorage.setItem("userAccessToken", token);
          dispatch(setTokens(token));
          navigate("/");
        } else {
          console.error("No token found in the URL");
        }
      } catch (error) {
        console.error("Error processing token:", error.message);
      }
    };
    getTokenFromUrl();
  }, [location.search, dispatch, navigate]);

  // const loginWithGoogle = () => {
  //   window.open("http://localhost:4000/auth/google/callback", "_self");
  // };

  // const responseGoogle = async (response) => {
  //   console.log(response,"ress in google");
  //   try {
  //     const res = await axios.get("/auth/google/callback", {
  //       params: { code: response.code },
  //       withCredentials: true,
  //     });
  //     const { token, userData } = res.data;
  //     if (token) {
  //       localStorage.setItem("userAccessToken", token);
  //       dispatch(setUserDetails(userData));
  //       dispatch(setTokens(token));
  //       navigate("/");
  //     } else {
  //       console.error("Google login failed:", res.data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error during Google login:", error.message);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const response = await axios.post("/login", values);
        if (response.data.success) {
          localStorage.setItem("userAccessToken", response?.data?.token);
          dispatch(setUserDetails(response.data.userData));
          dispatch(setTokens(response.data.token));
          navigate("/");
        } else {
          setFieldError("password", "Invalid email or password");
        }
      } catch (error) {
        console.error("Error during form submission:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container">
      <div className="from-text-1">
        <h1 className="heading">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>

          <div className="row">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <i
              className={`fas ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } password-toggle-icon`}
              onClick={() => setShowPassword(!showPassword)}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}
          </div>

          <button className="sub-btn" type="submit">
            Submit
          </button>
        </form>

        {/* <button className="google-login-btn" onClick={loginWithGoogle}>
          <GoogleLogin
            clientId="clientid"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </button> */}

        <p>
          Dont have an account? <Link to="/Signup">Click Here...</Link>
        </p>
      </div>
      <div className="log-animation-1">
        <img src={Loginpic} alt="" />
      </div>
    </div>
  );
};

export default Login;
