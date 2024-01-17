import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Pages/Home.js'
import {Route,Routes,BrowserRouter as Router, Navigate} from 'react-router-dom'
import Signup from './Pages/SignUp.js'
import Login from './Pages/Login.js';
import Resumeform from './Components/Resumeform.js'
import Cxocofounder from './Pages/Cxocofounder.js'
import { useSelector } from "react-redux";

import JobAdvice from './Components/JobAdviceForm.js';
import LogokitForm from './Components/LogokitForm.js';
import VideoResumjeform from './Components/VideoResumjeform.js';
import WebsiteForm from './Components/WebsiteForm.js';
function App() {
const token = useSelector((state) => state.user?.token);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/Signup"
            element={!token ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/Resumeform"
            element={<Resumeform />}
            // element={token ? <Resumeform /> : <Navigate to="/Login" />}
          />

          <Route path="/job-advice" element={<JobAdvice />} />

          <Route path="/logokitForm" element={<LogokitForm />} />
          <Route path="/videoResumeForm" element={<VideoResumjeform />} />
          <Route path="WebsiteForm" element={<WebsiteForm />} />

          <Route path="/Cxocofounder" element={<Cxocofounder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
