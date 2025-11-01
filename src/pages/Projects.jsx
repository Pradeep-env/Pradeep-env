import React from 'react'
import '../index.css'
import train from '../assets/train.png'
import sololevel from '../assets/sololevel.png'
import pats from '../assets/pats.png'
import shg from '../assets/shg.png'
import portfolio from '../assets/portfolio.png'
import mysql from '../assets/mysql.png'
import dsa from '../assets/dsa.png'
import { motion } from 'framer-motion'

const Projects = () => {
  const project = [
    {
      "name": "MySQL Simulator",
      "pic": mysql,
      "techstack": ["ubuntu","cpp","flask","html","css","git"],
      "link": "#",
      "github": "https://github.com/Pradeep3122003/mysql"
    },
    {
      "name": "Self Help Group",
      "pic": shg,
      "techstack": ["ubuntu","vs","figma","postman","flask","react","postgres","git"],
      "link": "#",
      "github": "https://github.com/Pradeep3122003/saraswati-sangha"
    },
    {
      "name": "DataStructure Visualizer",
      "pic": dsa, 
      "techstack": ["ubuntu","cpp","git"],
      "link": "#",
      "github": "https://github.com/Pradeep3122003/DataStructures"
    },
    {
      "name": "Prenatal Care App",
      "pic": pats,
      "techstack": ["vs","figma","python","flutter"],
      "link": "#",
      "github": "#"
    },
    {
      "name": "Sololeveling Website",
      "pic": sololevel,
      "techstack": ["vs","figma","react","node","mongo"],
      "link": "https://sololevelup.netlify.app/",
      "github": "#"
    },
    {
      "name": "MyTrain Website",
      "pic": train,
      "techstack": ["vs","ubuntu","html","css","php","sql","git"],
      "link": "http://mytrain.fwh.is/",
      "github": "https://github.com/Pradeep3122003/MyTrain"
    },
    {
      "name": "Portfolio Website",
      "pic": portfolio,
      "techstack": ["vs","figma","react","git"],
      "link": "https://www.figma.com/design/3HI8dpbFW7s4McA4VAFAbg/Portfolio?node-id=0-1&t=dh1D8yg6XCFZ394J-1",
      "github": "#"
    }
  ]
  const TechStack = [{
    "c":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/250px-The_C_Programming_Language_logo.svg.png",
    "cpp":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png",
    "python":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/225px-Python-logo-notext.svg.png",
    "html":"https://images.icon-icons.com/2107/PNG/96/file_type_html_icon_130541.png",
    "css":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png",
    "js":"https://i0.wp.com/blog.lewagon.com/wp-content/uploads/2023/07/javascript-g065129b6c_1280.png?w=1280&ssl=1",
    "react":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png",
    "node":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/500px-Node.js_logo.svg.png",
    "sql":"https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/150px-MySQL_logo.svg.png",
    "postgres":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png",
    "flask":"https://flask.palletsprojects.com/en/stable/_static/flask-logo.svg",
    "mongo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png",
    "java":"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png",
    "vs":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/330px-Visual_Studio_Code_1.35_icon.svg.png",
    "figma":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/250px-Figma-logo.svg.png",
    "ubuntu":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/768px-UbuntuCoF.svg.png?20120210072525",
    "postman":"https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png",
    "github":"https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
    "git":"https://git-scm.com/images/logos/logomark-orange@2x.png",
    "flutter":"https://images.seeklogo.com/logo-png/35/1/flutter-logo-png_seeklogo-354671.png",
    "php":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png?20180502235434"
  }]
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }} id='projects'>
      <h1>Recent Projects</h1>
      <div id="project">
        {project.map((proj, index) => (
          <div className="p" key={index}>
            <p style={{"color":"white", "textAlign":"center", "fontSize":"x-large"}}>{proj.name}</p>
            <img src={proj.pic} alt={proj.name} style={{"display":"block","margin":"1vh auto","width":"95%","height":"60%"}}/>
            <div id="stack" style={{"display":"grid", "gridTemplateColumns":"50% 50%", "gridTemplateRows":"100%", "marginTop":"1vh", "height":"10%"}}>
              <a href={proj.link} target="_blank" rel="noreferrer" style={{"textAlign":"center", "backgroundColor":"rgb(59, 58, 58)", "padding":"5px", "borderRadius":"5px", "color":"white", "textDecoration":"none", "width":"90%", "margin":"0 auto", "height":"100%"}}>Preview</a>
              <a href={proj.github} target="_blank" rel="noreferrer" style={{"textAlign":"center", "backgroundColor":"rgb(59, 58, 58)", "padding":"5px", "borderRadius":"5px", "color":"white", "textDecoration":"none", "width":"90%", "margin":"0 auto", "height":"100%"}}>GitHub Repo</a>
            </div>
              <div id="stack" style={{"display":"flex", "marginTop":"2vh", "height":"8%", "gap":"5px", "alignItems":"center"}}>
              <p style={{"color":"white", "marginLeft":"1vw"}}>TechStack : </p>
              {proj.techstack.map((tech, idx) => (
                <img src={TechStack[0][tech]} alt={tech} style={{"height":"3vh"}} key={idx}/>
              ))}
             </div>
          </div>
        ))}

       
        
      </div>
    </motion.div>
  )
}

export default Projects
