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
            className="contact-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/contact-img.jpg" alt="Contact" />
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
                <textarea id="message" name="message"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
