import Project from "../components/Project";
import '../components/Project.css';

function Portfolio() {
  const projectData = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 1.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 2.',
      link: 'https://example.com/project2'
    },
    {
      title: 'Project 3',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 3.',
      link: 'https://example.com/project3'
    },
    {
      title: 'Project 4',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 4.',
      link: 'https://example.com/project4'
    },
    {
      title: 'Project 5',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 5.',
      link: 'https://example.com/project5'
    },
    {
      title: 'Project 6',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Project 6.',
      link: 'https://example.com/project6'
    },
    // Add more projects as needed
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