import Project from "../components/Project";
import '../components/Project.css';
import weatherDashboardImage from '../images/weatherDashboard.png';
import codingQuizImage from '../images/codingQuiz.png';
import employeeTrackerImage from '../images/employeeTracker.png';
import vehicleCreatorImage from '../images/vehicleCreator.png';

function Portfolio() {
  const projectData = [
    {
      title: 'READMEcreator',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*oppPsIqwEiB_kndtd6GWxA.png',
      description: 'This program will create a README.md for the user. This used node.js and inquirer',
      link: 'https://github.com/jandgdinh/READMEcreator'
    },
    {
      title: 'VehicleCreator',
      image: vehicleCreatorImage,
      description: 'This is a command line project that will help the user create a vehicle using node.js and typescript',
      link: 'https://github.com/jandgdinh/VehicleCreator'
    },
    {
      title: 'weatherDashboard',
      image: weatherDashboardImage,
      description: 'This application will give the user a weather dashboard for multiple cities.',
      link: 'https://github.com/jandgdinh/weatherDashboard'
    },
    {
      title: 'Coding Quiz Game',
      image: codingQuizImage,
      description: 'Simple coding quiz created together with 3 other developers using git, HTML, CSS, and JavaScript.',
      link: 'https://example.com/project4'
    },
    {
      title: 'Prompt Engineering',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ETT6Lw3JvyD62KDTMuG3Mg.png',
      description: 'Gives a response using openai\'s ChatGPT api in a enthusatic way with a post request and city name given',
      link: 'https://github.com/jandgdinh/PromptEngineering'
    },
    {
      title: 'employeeCreator',
      image: employeeTrackerImage,
      description: 'This will let the user create a database and modify employee roles and more. This application using npm and PostGreSQL',
      link: 'https://github.com/jandgdinh/employeeTracker'
    },
  ];

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Portfolio;