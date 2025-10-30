import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar.jsx'
import heroImage from '../assets/pradeep.png'
import DotGrid from '../components/DotGrid';
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
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
         
          <p style={{textAlign: 'justify', padding: '15px'}}>Software eveloper | Cybersecurity Analyst </p>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  )
}

export default Home
