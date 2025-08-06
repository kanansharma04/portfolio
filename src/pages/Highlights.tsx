import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Highlights = () => {
  const achievements = [
    {
      id: 1,
      title: "Head of Prayas Club",
      organization: "JMIETI, Radaur",
      date: "2024-2025",
      description: "I am the Head of Prayas Club, leading initiatives to empower underprivileged communities through education and technology. A small step towards making a difference.Arranged various workshops and events to uplift the community.",
      category: "award",
      image: "/images/award1.jpg"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      organization: "Physics Wallah",
      date: "2024",
      description: "Completed a comprehensive course on Data Structures and Algorithms. Built a strong foundation in algorithm design and problem-solving techniques.",
      category: "certificate",
      image: "/images/cert1.jpg"
    },
    {
      id: 3,
      title: "Coding Challenge Winner",
      organization: "Coding Competition",
      date: "2023",
      description: "Won an inter-college coding competition, showcasing my problem-solving skills and algorithmic thinking.",
      category: "achievement",
      image: "/images/coding.jpg"
    },
    {
        id: 4,
        title: "Enterpreneurship Development Program",
        organization: "Personal Challenge",
        date: "2023",
        description: "Won third prize in an Enterpreneurship Development Program, enhancing my skills and consistency in programming.",
        category: "achievement",
        image: "/images/coding.jpg"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'award': return '🏆';
      case 'certificate': return '📜';
      case 'achievement': return '⭐';
      default: return '🎯';
    }
  };

  return (
    <PageLayout>
      <div className="highlights">
        <motion.div
          className="highlights-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gradient-text">Highlights & Achievements</h1>
          <p className="highlights-subtitle">
            A showcase of my journey, accomplishments, and milestones
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="achievement-category">
                <span className="category-icon">{getCategoryIcon(achievement.category)}</span>
              </div>
              
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="organization">{achievement.organization}</p>
                <p className="achievement-date">{achievement.date}</p>
                <p className="description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="soft-skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Soft Skills</h2>
          <div className="skills-grid">
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">🎯</span>
              <span className="skill-name">Leadership</span>
              <span className="skill-description">Leading teams and driving projects to success</span>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">💡</span>
              <span className="skill-name">Problem Solving</span>
              <span className="skill-description">Creative approach to complex challenges</span>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">🤝</span>
              <span className="skill-name">Team Collaboration</span>
              <span className="skill-description">Working effectively in diverse teams</span>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">💬</span>
              <span className="skill-name">Communication</span>
              <span className="skill-description">Clear and effective verbal & written communication</span>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">⚡</span>
              <span className="skill-name">Adaptability</span>
              <span className="skill-description">Quick learning and adapting to new technologies</span>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="skill-icon">⏰</span>
              <span className="skill-name">Time Management</span>
              <span className="skill-description">Efficiently managing multiple projects and deadlines</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Highlights;
