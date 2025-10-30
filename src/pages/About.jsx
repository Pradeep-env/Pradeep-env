import React from 'react'
import Dualingo from '../assets/duolingo.svg'
import '../index.css'
const About = () => {
  return (
    <div id='about'>
        <h1>About Me</h1>
        <div id="abpanel">
            <div className="abpanel1" >
              <h2 style={{"color":"white"}}>Summary</h2>
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
               <h2 style={{"color":"white"}}>Skills</h2>
                <div style={{textAlign: 'justify'}} id='skills'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/250px-The_C_Programming_Language_logo.svg.png" alt="c" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png" alt="c++" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/225px-Python-logo-notext.svg.png" alt="python" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/330px-HTML5_logo_and_wordmark.svg.png" alt="html" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png" alt="css" />
           <img src="https://i0.wp.com/blog.lewagon.com/wp-content/uploads/2023/07/javascript-g065129b6c_1280.png?w=1280&ssl=1" alt="js" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png" alt="react" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/500px-Node.js_logo.svg.png" alt="node" />
           <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/150px-MySQL_logo.svg.png" alt="mysql" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png" alt="postgresql" />
            <img src="https://flask.palletsprojects.com/en/stable/_static/flask-logo.svg" alt="flask" />
           
            
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png" alt="mongodb" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" alt="java" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/330px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/250px-Figma-logo.svg.png" alt="figma" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/825px-BurpSuite_Comunity_Edition.svg.png" alt="burpsuit" />
           <img src="https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg" alt="prometheus" />
           <img src="https://images.icon-icons.com/2699/PNG/512/grafana_logo_icon_171048.png" alt="grafana" />
           <img src="https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png" alt="postman" />
           <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="git" />
           <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="github" />
           <img src="https://images.seeklogo.com/logo-png/35/1/flutter-logo-png_seeklogo-354671.png" alt="flutter" />
          </div>
               <h2 style={{"color":"white"}}>Experiance</h2>
               <div className="sub">
                <div>
                  <h4 style={{ "margin":"3px auto"}}>Web Developer</h4>
                  <img src="https://codeclause.com/assets/img/Main%20Logo.png" alt="CodeClause" style={{"display":"block", "margin":"2px auto"}} />
                  
                  <p>Computer Science</p>
                  <p >Remote</p>
                </div>
                <div>
                  <h4 style={{ "margin":"3px auto"}}>Cybersecurity Intern</h4>
                  <img src="https://sacollegenaregal.edu.in/wp-content/uploads/2020/09/VTECH-CODERS-College-Emblem-edited-768x958.jpg" alt="VTU, Belagavi" style={{"display":"block", "margin":"2px auto"}} />
                  <p>Gadag</p>
                  <p>Belagavi</p>
                </div>
                <div>
                  <h4 style={{ "margin":"3px auto"}}>Cybersecurity Analyst</h4>
                  <img src="https://navodaya.gov.in/nvs/system/modules/NVS.WEB/resources/images/nvs_logo_color1.png" alt="VTU, Belagavi" style={{"display":"block", "margin":"2px auto"}} />
                  <p>Gadag</p>
                  <p>Belagavi</p>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default About
