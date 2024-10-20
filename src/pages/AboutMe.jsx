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
          <h4 className="h4-blob">
            Hi, my name is John Dinh, and I am a highly skilled Full Stack Developer based in Seattle, WA. I have a passion for creating efficient, scalable, and user-friendly web applications.
          </h4>
          <h4 className="h4-blob">
            With extensive experience in HTML, CSS, JavaScript, Typescript, React, Node.js, Express, PostgreSQL, C, and Python, I bring a diverse skill set to the table. My expertise allows me to tackle complex problems and deliver high-quality solutions.
          </h4>
          <h4 className="h4-blob">
            I am actively seeking opportunities as a Full Stack Developer or software engineering intern where I can contribute to innovative projects and grow within a dynamic team. Let's build something amazing together!
          </h4>
          <img src={profilePic} alt="John Dinh" width="500px" />
        </div>
      </div>
    </div>
  );
}
