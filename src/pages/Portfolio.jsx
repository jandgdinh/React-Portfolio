import Project from "../components/Project";
import '../components/Project.css';
import weatherDashboardImage from '../assets/weatherDashboard.png';
import codingQuizImage from '../assets/codingQuiz.png';
import employeeTrackerImage from '../assets/employeeTracker.png';
import vehicleCreatorImage from '../assets/vehicleCreator.png';
import portfolioImage from '../assets/screenshot.png';
import gn001Image from '../assets/gn-001screenshot.png';

function Portfolio() {
  const projectData = [
    {
      title: 'GN-001 Creations',
      image: gn001Image,
      description: 'A visually stunning website showcasing a variety of cakes with detailed descriptions, pricing, and an easy-to-use ordering system. Built with React, CSS, and Node.js for a delightful user experience. The site features a responsive design, ensuring accessibility across devices.',
      githubLink: 'https://github.com/jandgdinh/GN001-Creations',
      deployedLink: 'https://gn001-creations.onrender.com/'
    },
    {
      title: 'Doomsday Depot',
      image: portfolioImage,
      description: 'A full-stack e-commerce application designed to provide users with a seamless shopping experience. Features include user authentication, product search, cart management, and order processing. Built with React, Typescript, Node.js, Express.js, MongoDB, and GraphQL.',
      githubLink: 'https://github.com/jandgdinh/doomsday_depot',
      deployedLink: 'https://doomsday-depot-e3b01e59b096.herokuapp.com/'
    },
    {
      title: 'Social Network API',
      image: 'https://i.ytimg.com/vi/AwDn_Ct_67I/maxresdefault.jpg',
      description: 'A dynamic social network application enabling users to share thoughts, react to friends\' posts, and build a friend list. Built with Express.js, MongoDB, and Mongoose for seamless performance.',
      githubLink: 'https://github.com/jandgdinh/SocialNetworkAPI',
      deployedLink: 'https://drive.google.com/file/d/1PblUbTtBpDK0oGY84hUfUvRF3VGdghXw/view?usp=sharing'
    },
    {
      title: 'Prompt Engineering',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ETT6Lw3JvyD62KDTMuG3Mg.png',
      description: 'An innovative application leveraging OpenAI\'s ChatGPT API to provide enthusiastic responses based on city names via POST requests.',
      githubLink: 'https://github.com/jandgdinh/PromptEngineering',
      deployedLink: 'https://drive.google.com/file/d/1NmeV2VvcDQggWze39t45283vzvV33EKL/view?usp=sharing'
    },
    {
      title: 'VehicleCreator',
      image: vehicleCreatorImage,
      description: 'A command-line tool empowering users to create custom vehicles using Node.js and TypeScript for robust and efficient performance.',
      githubLink: 'https://github.com/jandgdinh/VehicleCreator',
      deployedLink: 'https://drive.google.com/file/d/1c3E7na1-K5b0k8ij5azjee9MXMOuJ3Mv/view?usp=sharing'
    },
    {
      title: 'READMEcreator',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*oppPsIqwEiB_kndtd6GWxA.png',
      description: 'A streamlined program designed to generate professional README.md files effortlessly using Node.js and Inquirer.',
      githubLink: 'https://github.com/jandgdinh/READMEcreator',
      deployedLink: 'https://drive.google.com/file/d/1qEqsrhGoWq1lmqcuZ0c-l_YAX7-bJfko/view?usp=sharing'
    },
    {
      title: 'weatherDashboard',
      image: weatherDashboardImage,
      description: 'An interactive weather dashboard providing real-time updates for multiple cities using the OpenWeather API. Features a responsive design for an optimal user experience across devices.',
      githubLink: 'https://github.com/jandgdinh/weatherDashboard',
      deployedLink: 'https://weatherdashboard-zm0v.onrender.com/'
    },
    {
      title: 'employeeCreator',
      image: employeeTrackerImage,
      description: 'A comprehensive tool for managing employee databases, roles, and more, utilizing npm and PostgreSQL for robust data handling.',
      githubLink: 'https://github.com/jandgdinh/employeeTracker',
      deployedLink: 'https://drive.google.com/file/d/117dNHTfolvE1uKEe0vQaB525D52nYjGX/view?usp=sharing'
    },
    {
      title: 'Coding Quiz Game',
      image: codingQuizImage,
      description: 'A collaborative coding quiz game developed with HTML, CSS, and JavaScript, offering an engaging way to test coding knowledge.',
      githubLink: 'https://github.com/jandgdinh/CodingQuiz',
      deployedLink: 'https://codingquiz.onrender.com/'
    },
  ];

  return (
    <>
    <h2>Projects</h2>
    <div className="projects-container">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink} 
        />
      ))}
    </div>
    </>
  );
}

export default Portfolio;