import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Pages/Home.js'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Signin from './Pages/Signin.js'
import Login from './Pages/Login.js';
function App() {

  return (
    <div className="App">
      
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signin' element={<Signin />}/>
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
