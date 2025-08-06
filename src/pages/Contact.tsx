import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Contact = () => {
  return (
    <PageLayout>
      <div className="contact">
        <motion.h1
          className="gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Contact Me
        </motion.h1>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Get in Touch</h2>
            <p>Feel free to reach out through any of these platforms:</p>

            <div className="social-links">
              <motion.a
                href="https://github.com/kanansharma04"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">🔗</span>
                <span> My GitHub Account</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/kanan-sharma-b589b0275/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
              
                <span className="social-icon">💼</span>
                <span> My LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href="mailto:kanansharmakkr@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">📧</span>
                <span>Gmail</span>
              </motion.a>

              <motion.a
                href="tel:91+ 9034584435"
                className="social-link"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">📱</span>
                <span>+91 9034584435</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5}></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
