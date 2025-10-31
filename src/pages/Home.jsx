import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar.jsx'
import heroImage from '../assets/pradeep.png'
import DotGrid from '../components/DotGrid';
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx';
const Home = () => {
  return (
    <div>
      <Navbar />
    
  


<div style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: -1 }} id='wallpaper'>
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
      <div id="homepanel">
        <img src={heroImage} alt="" />
        <div id="homeinfo">
          <h1>Hi, I'm Pradeep</h1>
         
          <p style={{textAlign: 'center', padding: '15px'}}>Software Developer <br /> Cybersecurity Analyst </p>
       <div id="links">
        <a href="https://drive.google.com/file/d/1vWBab_B4NZiiMUR6ewDYSI9Vp-4Wa3o9/view?usp=sharing" target='_blank'>Resume</a>
        <a href="mailto:pradeepkh312@gmail.com" target="_gmail">Send Email</a>

       </div>
       
        </div>
        
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
