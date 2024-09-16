import React from "react";
import "../App.css";
import Card from "../components/Card";

export default function AboutMe() {
  return (
    <div className="home">
      <content>
        <p>
          Hi my name is John Dinh and I am a Full Stack Developer. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am currently looking for a job as a Full Stack Developer. Please contact me if you have any job opportunities.
        </p>
        
        <div className="Projects">
          <h2>Projects</h2>
          <div className="card-container">
            <Card title="Project 1" image="https://via.placeholder.com/150" content="This is a project." />
            <Card title="Project 2" image="https://via.placeholder.com/150" content="This is a project." />
            <Card title="Project 3" image="https://via.placeholder.com/150" content="This is a project." />
            <Card title="Project 4" image="https://via.placeholder.com/150" content="This is a project." />
            <Card title="Project 5" image="https://via.placeholder.com/150" content="This is a project." />
            <Card title="Project 6" image="https://via.placeholder.com/150" content="This is a project." />
          </div>
        </div>
        <div className="Skills">
          <h2>Skills / Experience</h2>
          <div className="card-container">
            <Card title="HTML" image="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg" content="HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure of a webpage, allowing you to define elements such as headings, paragraphs, links, images, and more. With HTML, you can create well-structured and accessible web content." />
            <Card title="CSS" image="https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_807/f_auto,q_auto/v1649718594/Web_Assets/blog/working_with_css_22218720ab/working_with_css_22218720ab-jpg?_i=AA" content="CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to apply styles to HTML elements, such as colors, fonts, spacing, and positioning. CSS makes it possible to create visually appealing and responsive web designs that work across different devices and screen sizes." />
            <Card title="React" image="https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FiCfQnsFQzuzB7S8bLbxECrVk&width=828" content="React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows you to create reusable UI components and manage the state of your application efficiently. It uses a virtual DOM to optimize rendering and improve performance." />
            <Card title="Node.js" image="https://blog.logrocket.com/wp-content/uploads/2020/02/image-processing-with-node-and-jimp.png" content="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling you to build scalable and high-performance web applications. Node.js is known for its non-blocking, event-driven architecture, making it ideal for real-time applications." />
            <Card title="Express" image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7fe7SkSNP6Y8PvTRm4Jl6Q.png" content="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of handling HTTP requests, routing, and middleware, allowing you to create RESTful APIs and web applications quickly and efficiently." />
            <Card title="PostGreSQL" image="https://cdn.thenewstack.io/media/2021/10/84b1b2cf-postgreselepantwbg.png" content="PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its robustness, scalability, and compliance with SQL standards. It supports a wide range of data types and advanced features such as complex queries, foreign keys, triggers, views, and transactional integrity." />
          </div>

        </div>
      </content>
    </div>
  );
}
