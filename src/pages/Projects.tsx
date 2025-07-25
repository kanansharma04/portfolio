import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const projects = [
    { 
      title: 'Softshell', 
      description: 'A license exchange website transforming unused softwares into revenue. Built with React, Tailwind, and JavaScript having animations and transitions.',
      tech: [' React ', ' Tailwind ', ' JavaScript '],
      image: '/images/softshell-img.jpg',
      link: 'https://credex-assignment-eight.vercel.app/'
    },
    { 
      title: 'CodeX', 
      description: 'An EdTech Website where you can get latest updates, post and read blogs and get Interview Questions',
      tech: [' HTML ', ' Bootstrap ', ' JavaScript '],
      image: '/images/codex-image.jpg',
      link: 'https://code-x-frontend-nu.vercel.app/'
    },
    { 
      title: 'RedBus-Clone', 
      description: 'A clone of the popular bus ticket booking platform, built with Angular , Bootstrap and JavaScript',
      tech: [' Angular ', ' Bootstrap ', ' JavaScript '],
      image: '/images/redbus-clone-img.png',
      link: 'https://redbus-clone-eosin.vercel.app/'
    },
    {
      title: 'Login Page',
      description: 'A basic login page made with React.js that allows user to signupp and signin.',
      tech: [' React.js ', ' JavaScript ', ' TypeScript '],
      image: '/images/download.jpeg',
      link: 'https://devtask-hazel.vercel.app/'
    },
    {
      title: 'AMRR',
      description: 'An e-commerce platform focused on adding and viewing products.',
      tech: [' React.js ', ' Node.js ', ' API '],
      image: '/images/amrr.jpeg',
      link: 'https://amrr-assignment-navy.vercel.app/'
    },
    {
      title: 'Skincare',
      description: 'A modern skincare application with landing page and and a clone of figma file.',
      tech: [' React.js ', ' tailwind CSS ', ' TypeScript '],
      image: '/images/skincare.jpeg',
      link: 'https://skincare-sixnine.vercel.app/'
    }
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
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {project.image && (
                <motion.div 
                  className="project-image"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
              )}
              <motion.h3
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {project.title}
              </motion.h3>
              <p>{project.description}</p>
              {project.tech && (
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      whileHover={{ 
                        scale: 1.05,
                        y: -1,
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.15) + (techIndex * 0.1) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              {project.link && (
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-link"
                  whileHover={{ 
                    scale: 1.02,
                    x: 3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
