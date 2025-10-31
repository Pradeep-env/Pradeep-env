import React from 'react'
import '../index.css'
const Contact = () => {
  const logos=
    {
      "github":"https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
    
      "linkedin":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png?20210220164014",
    
          "dualingo":"https://design.duolingo.com/86230c9ad10d9f08b785.svg",
    
          "sololearn":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sololearn.jpg/640px-Sololearn.jpg",
    
          "instagram":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png",
    
          "geeks":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1200px-GeeksForGeeks_logo.png?20250223082657",
    
    
      "leetcode":"https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508 ",
    }

  const formsub = (e) =>{
    e.preventDefault();
    alert("Form submission is currently disabled.")
  }
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <div id="contactpanel">
      <div id="media">
        <div className="m">
              <p style={{"color":"white", "textAlign":"center", "fontSize":"calc( 1.5vh + 1vw)", "marginTop":"3%"}}>Let's Learn Together</p>
              <div className="icons">
                <a href="https://www.duolingo.com/profile/Pradeep_K_H" target='_blank'> <img src={logos.dualingo} alt="dualingo" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/>
</a>
               
             <a href="https://www.sololearn.com/en/profile/24237099" target='_blank'> <img src={logos.sololearn} alt="sololearn" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/></a>
             <a href="https://www.geeksforgeeks.org/user/pradeephpat/" target='_blank'> <img src={logos.geeks} alt="geeksforgeeks" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/></a>
             <a href="https://leetcode.com/u/pradeepkh312/" target='_blank'> <img src={logos.leetcode} alt="leetcode" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/> </a>
              </div>
              
        </div>
        <div className="m">
               <p style={{"color":"white", "textAlign":"center", "fontSize":"calc( 1.5vh + 1vw)","marginTop":"3%"}}>Let's Build Together</p>
                <div className="icons">
                <a href="https://www.linkedin.com/in/pradeepholagundi/" target='_blank'><img src={logos.linkedin} alt="linkedin" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/></a>
                <a href="https://www.instagram.com/almost_pradeep/" target='_blank'><img src={logos.instagram} alt="instagram" style={{"display": "block", "height":"calc(2vh + 2vw)"}}/></a>
                <a href="https://github.com/Pradeep3122003" target='_blank'><img src={logos.github} alt="github"  style={{"display": "block", "height":"calc(2vh + 2vw)"}}/></a>
                </div>
        </div>
      </div>
      <div id="form">
        <form onSubmit={formsub}  >
          <input type="text" placeholder='Name' required />
          <input type="email" placeholder='Email' required />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type="submit">Send</button>
        </form>
        </div></div>
    </div>
  )
}

export default Contact
