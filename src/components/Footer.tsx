import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        {/* <div className="footer-section">
          <h3>Get in Touch</h3>
          <div className="contact-links">
            <a href="mailto:kanan@example.com" className="footer-link">
              <span className="footer-icon">📧</span>
              kanan@example.com
            </a>
            <a href="https://linkedin.com/in/kanan-sharma" target="_blank" rel="noopener noreferrer" className="footer-link">
              <span className="footer-icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div> */}
        
       
        
        <div className="footer-bottom">
          <p className="footer-text">Made with ❤️ by Kanan Sharma</p>
          <p className="footer-copyright">&copy; 2025 All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
