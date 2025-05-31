import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const projects = [
    { 
      title: 'Softshell', 
      description: 'A license exchange website transforming unused softwares into revenue. Built with React, Tailwind, and JavaScript having animations and transitions.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      image: '/images/softshell-img.jpg',
      link: 'https://credex-assignment-eight.vercel.app/'
    },
    { 
      title: 'CodeX', 
      description: 'An EdTech Website where you can get latest updates, post and read blogs and get Interview Questions',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      image: '/images/codex-image.jpg',
      link: 'https://code-x-frontend-nu.vercel.app/'
    },
    { 
      title: 'RedBus-Clone', 
      description: 'A clone of the popular bus ticket booking platform, built with Angular , Bootstrap and JavaScript',
      tech: ['Angular', 'Bootstrap', 'JavaScript'],
      image: '/images/redbus-clone-img.png',
      link: 'https://redbus-clone-eosin.vercel.app/'
    },
  ];

  return (
    <PageLayout>
      <div className="projects">
        <motion.h1 
          className="gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          My Projects
        </motion.h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tech && (
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
