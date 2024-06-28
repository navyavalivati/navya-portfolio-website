import React from 'react';
import EachProject from './EachProject';
import './Projects.css';
const projectsData = [
  {
    title: 'My Portfolio Using React',
    description: 'A virtual deal vault application designed and developed using ReactJS and Redux.',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://github.com/navyavalivati/'
  },
  {
    title: 'Online Compiler',
    description: 'Description of another project.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
    githubLink: 'https://github.com/username/another-project'
  },
  {
    title: 'Automatic HTML Code Generation Using Hand-drawn Mock-up images',
    description: 'Description of another project.',
    techStack: ['Python', 'MachineLearning'],
    githubLink: 'https://github.com/username/another-project'
  },
  {
    title: 'Online Crowd-Funding Application',
    description: 'Description of another project.',
    techStack: ['BlockChain', 'Solidity'],
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
