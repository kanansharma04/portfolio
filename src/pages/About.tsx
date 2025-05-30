import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const skills = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572B6'
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    color: '#7952B3'
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06B6D4'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#000000'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479A1'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#181717'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ED'
  }
];

const About = () => {
  return (
    <PageLayout>
      <div className="about">
        <div className="about-header">
          <motion.h1 
            className="gradient-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <p className="about-description">I'm a passionate developer with expertise in React and TypeScript.</p> */}
          
          <div className="education-container">
            <h2>Education</h2>
            <div className="education-item">
              <h3>B.Tech in Artificial Intelligence and Machine Learning</h3>
              <p>Jai Parkash Mukand Lal Innovative Engineering and Technology Institute</p>
              <p>Average GPA : 7.5</p>
            </div>
            <div className="education-item" style={{ marginTop: '1rem' }}>
              <h3>Senior Secondary Education</h3>
              <p>Maharana Pratap Public School, Kurukshetra</p>
              <p>88%</p>
            </div>
          </div>

          <div className="skills-container">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  style={{ borderColor: skill.color }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;