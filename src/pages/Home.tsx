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
          <motion.h1 className="gradient-text">Hi, I'm&nbsp;Kanan&nbsp;Sharma</motion.h1>
          <motion.p
            className="roles-text"
            data-searchable="full stack developer web developer creator"
          >
           Full Stack Developer | Designer | Frontend Enthusiast
          </motion.p>
          <motion.div
            className="about-text"
            data-searchable="react tailwind nodejs express postgresql"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
             I build fast, responsive full-stack apps using React, Next.js, Tailwind CSS, Node.js, and PostgreSQL — with clean code, modern UI, and scalable architecture.
Also experienced with MongoDB, MySQL, JWT Auth, REST APIs, and cloud deployment.
            </p>
       📫 Available for freelance & full-time roles.<p>

            </p>
            <a 
              href="/kana_resume_final.pdf" 
              download="Kanan_Sharma_Resume.pdf"
              className="resume-download-btn"
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
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="right-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container" style={{ width: '380px', height: '380px' }}>
            {/* Add your image here */}
            <motion.img
              src="/images/front-img.jpg"
              alt="Profile"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Home;
