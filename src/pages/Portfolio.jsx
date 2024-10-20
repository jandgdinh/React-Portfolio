import Project from "../components/Project";
import '../components/Project.css';
import weatherDashboardImage from '../assets/weatherDashboard.png';
import codingQuizImage from '../assets/codingQuiz.png';
import employeeTrackerImage from '../assets/employeeTracker.png';
import vehicleCreatorImage from '../assets/vehicleCreator.png';

function Portfolio() {
  const projectData = [
    {
      title: 'Social Network API',
      image: 'https://i.ytimg.com/vi/AwDn_Ct_67I/maxresdefault.jpg',
      description: 'A dynamic social network application enabling users to share thoughts, react to friends\' posts, and build a friend list. Built with Express.js, MongoDB, and Mongoose for seamless performance.',
      githubLink: 'https://github.com/jandgdinh/SocialNetworkAPI',
      deployedLink: 'https://example.com/employeeCreator'
    },
    {
      title: 'Prompt Engineering',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ETT6Lw3JvyD62KDTMuG3Mg.png',
      description: 'An innovative application leveraging OpenAI\'s ChatGPT API to provide enthusiastic responses based on city names via POST requests.',
      githubLink: 'https://github.com/jandgdinh/PromptEngineering',
      deployedLink: 'https://example.com/PromptEngineering' // Still need to add the deployed link
    },
    {
      title: 'VehicleCreator',
      image: vehicleCreatorImage,
      description: 'A command-line tool empowering users to create custom vehicles using Node.js and TypeScript for robust and efficient performance.',
      githubLink: 'https://github.com/jandgdinh/VehicleCreator',
      deployedLink: 'https://example.com/VehicleCreator' // Still need to add the deployed link
    },
    {
      title: 'READMEcreator',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*oppPsIqwEiB_kndtd6GWxA.png',
      description: 'A streamlined program designed to generate professional README.md files effortlessly using Node.js and Inquirer.',
      githubLink: 'https://github.com/jandgdinh/READMEcreator',
      // Still need to add the deployed link
    },
    {
      title: 'weatherDashboard',
      image: weatherDashboardImage,
      description: 'An interactive weather dashboard providing real-time updates for multiple cities using the OpenWeather API. Features a responsive design for an optimal user experience across devices.',
      githubLink: 'https://github.com/jandgdinh/weatherDashboard',
      deployedLink: 'https://example.com/weatherDashboard' // Still need to add the deployed link
    },
    {
      title: 'employeeCreator',
      image: employeeTrackerImage,
      description: 'A comprehensive tool for managing employee databases, roles, and more, utilizing npm and PostgreSQL for robust data handling.',
      githubLink: 'https://github.com/jandgdinh/employeeTracker',
      deployedLink: 'https://example.com/employeeCreator' // Add the deployed link
    },
    {
      title: 'Coding Quiz Game',
      image: codingQuizImage,
      description: 'A collaborative coding quiz game developed with HTML, CSS, and JavaScript, offering an engaging way to test coding knowledge.',
      githubLink: 'https://github.com/jandgdinh/CodingQuiz',
      deployedLink: 'https://example.com/CodingQuizGame' // Still need to add the deployed link
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
          deployedLink={project.deployedLink} // Pass the deployed link
        />
      ))}
    </div>
    </>
  );
}

export default Portfolio;