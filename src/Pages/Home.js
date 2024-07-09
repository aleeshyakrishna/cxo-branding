import React from 'react'
import Navbar from '../Components/Navbar.js'
import Header from '../Components/Header.js'
import Resume from '../Components/Resume.js'
import Testimonal from '../Components/Testimonal.js'
import Jobsearch from '../Components/Jobsearch.js'
import Personalbranding from '../Components/Personalbranding.js'
import Profilemanagement from '../Components/Profilemanagement.js'
import Footer from '../Components/Footer.js'
import OurServices from '../Components/OurServices.js'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <div id='resume'>
        <Resume />
      </div> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <OurServices />
      {/* <Jobsearch />
      <Personalbranding />
      <Profilemanagement /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Testimonal />

      <Footer />
    </div>
  );
}

export default Home