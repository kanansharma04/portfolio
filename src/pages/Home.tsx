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
            data-searchable="web developer designer creator"
          >
            Web Developer | Designer | Creator
          </motion.p>
          <motion.div
            className="about-text"
            data-searchable="react tailwind nodejs express postgresql"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
              I craft sleek, responsive UIs with React and Tailwind CSS.
Skilled in building fast, scalable apps using Node.js, Express, and PostgreSQL.
            </p>
            <p>
              Passionate about clean code, great UX, and solving real-world problems.
Check out my work below or let’s build something awesome together.
</p> 📫 Available for freelance & full-time roles.<p>

            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="right-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
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
