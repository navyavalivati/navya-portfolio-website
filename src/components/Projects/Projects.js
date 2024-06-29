import React from 'react';
import EachProject from './EachProject';
import './Projects.css';
const projectsData = [
  {
    title: 'My Portfolio Using React',
    description: 'I developed this portfolio using HTML, CSS, JavaScript, and React to showcase my skills, projects, and experience. The site features a responsive design, interactive elements, and smooth navigation, with engaging animations to enhance the user experience.',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://github.com/navyavalivati/navya-portfolio-website'
  },
  {
    title: 'Online IDE',
    description: 'working on an ongoing project to develop an online compiler using HTML, CSS, JavaScript, Angular, and Node.js. This project aims to provide a robust and user-friendly platform for compiling and running code directly in the browser, supporting multiple programming languages. The compiler features real-time code editing, syntax highlighting, and seamless integration with backend services to execute code efficiently.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'NodeJS'],
    githubLink: 'https://github.com/navyavalivati/'
  },
  {
    title: 'Automatic HTML Code Generation Using Hand-drawn Mock-up images',
    description: 'This project is developed using machine learning techniques and Python libraries to automatically generate HTML code from hand-drawn mock-up images. By interpreting the visual elements of the mock-ups, the system translates them into corresponding HTML structures, streamlining the web development process and enhancing productivity.',
    techStack: ['Python', 'MachineLearning'],
    githubLink: 'https://github.com/navyavalivati/'
  },
  {
    title: 'Online Crowd-Funding Application',
    description: 'Developed as part of the Virtusa Codelite Hackathon, this team project utilizes smart contracts to facilitate transparent and secure transactions. By leveraging blockchain technology, we ensured trust and accountability among participants, creating a reliable and efficient platform for crowdfunding initiatives.',
    techStack: ['BlockChain', 'Solidity', 'ReactJS'],
    githubLink: 'https://github.com/iamneowise/Blockchain-Crowdfund-Application-BC_Team_5'
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <EachProject
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
