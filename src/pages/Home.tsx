import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <div className="home-container">
        <motion.div
          className="left-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="gradient-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <span className="greeting">Hi, I'm </span>
            <span className="name">Kanan Sharma</span>
          </motion.h1>
          <motion.p
            className="roles-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeOut"
            }}
            data-searchable="full stack developer web developer creator"
          >
           Full Stack Developer | Designer | Frontend Enthusiast
          </motion.p>
          <motion.div
            className="about-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: "easeOut"
            }}
            data-searchable="react tailwind nodejs express postgresql"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
             I build fast, responsive full-stack apps using React, Next.js, Tailwind CSS, Node.js, and PostgreSQL — with clean code, modern UI, and scalable architecture.
Also experienced with MongoDB, MySQL, JWT Auth, REST APIs, and cloud deployment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              📫 Available for freelance & full-time roles.
            </motion.p>
            
            <motion.a 
              href="/kana_resume_final.pdf" 
              download="Kanan_Sharma_Resume.pdf"
              className="resume-download-btn"
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 2.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block',
                background: 'var(--primary-gradient)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="right-section"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          <motion.div 
            className="image-container" 
            style={{ width: '380px', height: '450px' }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/images/kanan_portfolio_pic.jpg"
              alt="Profile"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};


export default Home;
