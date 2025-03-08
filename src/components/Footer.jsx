import React from "react";
import facebookIcon from "../icons/facebook.png";
import twitterIcon from "../icons/Twitter.png";
import instagramIcon from "../icons/instagram.png";
import linkedinIcon from "../icons/linkedin.png";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>Phone: +91 7412589630</p>
          <p>Email: dairyclouds79@gmail.com</p>
          <p>Address: Pune, Maharashtra</p>
        </div>

        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>FAQ</a></li>
            <li><a href="#" style={styles.link}>Terms & Conditions</a></li>
            <li><a href="#" style={styles.link}>Privacy Policy</a></li>
            <li><a href="#" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" style={styles.icon} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
            </a>
          </div>
        </div>

        <div style={styles.section}>
          <h3>Newsletter Signup</h3>
          <form>
            <input type="email" placeholder="eg dairyclouds79@gmail.com" required style={styles.input} />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#004D40", // Dark Teal
    color: "#FFFFFF",
    padding: "40px 20px",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
  },
  section: {
    flex: "1 1 200px", // Flex-grow, flex-shrink, flex-basis
    minWidth: "200px",
    margin: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "block",
    margin: "5px 0",
    transition: "0.3s",
    ":hover": {
      color: "#009688", // Vibrant Teal on hover
    },
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  icon: {
    width: "30px",
    height: "30px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.2)", // Grow on hover
    },
  },
  input: {
    padding: "8px",
    width: "100%",
    maxWidth: "250px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "none",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "4px",
    border: "none",
    background: "#009688", // Vibrant Teal
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "0.3s",
    ":hover": {
      background: "#00796B", // Darker Teal on hover
    },
  },
  "@media (max-width: 768px)": {
    footerContent: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    section: {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
    socialIcons: {
      justifyContent: "center",
    },
  },
};

export default Footer;