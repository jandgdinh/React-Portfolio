import Project from "../components/Project";
import '../components/Project.css';
import weatherDashboardImage from '../assets/weatherDashboard.png';
import codingQuizImage from '../assets/codingQuiz.png';
import employeeTrackerImage from '../assets/employeeTracker.png';
import vehicleCreatorImage from '../assets/vehicleCreator.png';

function Portfolio() {
  const projectData = [
    {
      title: 'READMEcreator',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*oppPsIqwEiB_kndtd6GWxA.png',
      description: 'This program will create a README.md for the user. This used node.js and inquirer',
      githubLink: 'https://github.com/jandgdinh/READMEcreator',
      deployedLink: 'https://example.com/READMEcreator' // Still need to add the deployed link
    },
    {
      title: 'VehicleCreator',
      image: vehicleCreatorImage,
      description: 'This is a command line project that will help the user create a vehicle using node.js and typescript',
      githubLink: 'https://github.com/jandgdinh/VehicleCreator',
      deployedLink: 'https://example.com/VehicleCreator' // Still need to add the deployed link
    },
    {
      title: 'weatherDashboard',
      image: weatherDashboardImage,
      description: 'This application will give the user a weather dashboard for multiple cities.',
      githubLink: 'https://github.com/jandgdinh/weatherDashboard',
      deployedLink: 'https://example.com/weatherDashboard' // Still need to add the deployed link
    },
    {
      title: 'Coding Quiz Game',
      image: codingQuizImage,
      description: 'Simple coding quiz created together with 3 other developers using git, HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/jandgdinh/CodingQuiz',
      deployedLink: 'https://example.com/CodingQuizGame' // Still need to add the deployed link
    },
    {
      title: 'Prompt Engineering',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ETT6Lw3JvyD62KDTMuG3Mg.png',
      description: 'Gives a response using openai\'s ChatGPT api in a enthusiastic way with a post request and city name given',
      githubLink: 'https://github.com/jandgdinh/PromptEngineering',
      deployedLink: 'https://example.com/PromptEngineering' // Still need to add the deployed link
    },
    {
      title: 'employeeCreator',
      image: employeeTrackerImage,
      description: 'This will let the user create a database and modify employee roles and more. This application using npm and PostGreSQL',
      githubLink: 'https://github.com/jandgdinh/employeeTracker',
      deployedLink: 'https://example.com/employeeCreator' // Add the deployed link
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