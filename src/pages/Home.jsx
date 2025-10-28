import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar.jsx'
import heroImage from '../assets/pradeep.png'
import DotGrid from '../components/DotGrid';
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
          <h4>Software Developer | Cybersecurity Analyst </h4>
          <p style={{textAlign: 'justify', padding: '15px'}}>
            I am a passionate frontend developer with expertise in React.js and a keen eye for UI/UX design. I love creating beautiful and functional web applications that provide an exceptional user experience.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Home
