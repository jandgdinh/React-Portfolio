import React from "react";
import "../App.css";
import "../pages/AboutMe.css";

import "../components/Project.css";
import profilePic from "../assets/profilePic.jpg";
import siteLogo from "../sitelogo.png";

export default function AboutMe() {
  return (
    <div className="home">
      <img src={siteLogo} alt="John Dinh" width="500px" />
      <div className="card">
        
        <div className="card-content">
          <p>
            Hi my name is John Dinh and I am a Full Stack Developer from Seattle, WA with a wife and two kids. I have experience with HTML, CSS, JavaScript, Typescript, React, Node.js, Express, PostgreSQL, C, and Python. I am currently looking for a job as a Full Stack Developer or software engineering intern.
          </p>
          <img src={profilePic} alt="John Dinh" width="500px" />
        </div>
      </div>
    </div>
  );
}
