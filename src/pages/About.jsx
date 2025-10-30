import React from 'react'
import Dualingo from '../assets/duolingo.svg'
import '../index.css'
const About = () => {
  return (
    <div id='about'>
        <h1>About Me</h1>
        <div id="abpanel">
            <div className="abpanel1" >
                <p style={{textAlign: 'justify'}} id='sum'>
            I am a passionate software developer with expertise in JS, Python and a keen eye for UI/UX design. I love creating beautiful and functional web applications that provide an exceptional user experience.
          </p>
          <h2 style={{"color":"white"}}>Education</h2>
               <div className="sub">
                <div>
                  <h4 style={{ "margin":"3px auto"}}>Graduation</h4>
                  <img src="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/VTU-Logo-250x250-1.png?w=250&ssl=1" alt="VTU, Belagavi" style={{"display":"block", "margin":"2px auto"}} />
                  
                  <p>Computer Science</p>
                  <p style={{"color":"gold"}}>Gold Medalist</p>
                </div>
                <div>
                  <h4 style={{ "margin":"3px auto"}}>College</h4>
                  <img src="https://sacollegenaregal.edu.in/wp-content/uploads/2020/09/VTECH-CODERS-College-Emblem-edited-768x958.jpg" alt="VTU, Belagavi" style={{"display":"block", "margin":"2px auto"}} />
                  <p>Gadag</p>
                  <p>Karnataka, In</p>
                </div>
                <div>
                  <h4 style={{ "margin":"3px auto"}}>High-School</h4>
                  <img src="https://navodaya.gov.in/nvs/system/modules/NVS.WEB/resources/images/nvs_logo_color1.png" alt="VTU, Belagavi" style={{"display":"block", "margin":"2px auto"}} />
                  <p>Gadag</p>
                  <p>Karnataka, In</p>
                </div>
               </div>
            </div>
            <div className="abpanel1">
              
            </div>
        </div>
    </div>
  )
}

export default About
