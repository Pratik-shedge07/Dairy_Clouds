import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      <div style={styles.contentContainer}>
        {/* Contact Form Section */}
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <h3 style={styles.subHeading}>Get in Touch</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button} className="hover-button">
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <h3 style={styles.subHeading}>Our Contact Details</h3>
          <p style={styles.detailItem}>
            <FaMapMarkerAlt style={styles.icon} /> Pune, India
          </p>
          <p style={styles.detailItem}>
            <FaPhone style={styles.icon} /> 
            <a href="tel:+917412589630" style={styles.link} className="hover-link">+91 7412589630</a>
          </p>
          <p style={styles.detailItem}>
            <FaEnvelope style={styles.icon} /> 
            <a href="mailto:dairyclouds79@gmail.com" style={styles.link} className="hover-link">dairyclouds79@gmail.com</a>
          </p>

          {/* Google Maps Embed */}
          <div style={styles.mapContainer}>
            <iframe
              title="Dairy Clouds Location"
              style={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340444!3d18.524870610788835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740934046795!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

// CSS Styles as JS Object
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 20px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#2c3e50',
  },
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  subHeading: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#34495e',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '18px',
    marginBottom: '10px',
  },
  icon: {
    color: '#3498db',
    fontSize: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  mapContainer: {
    width: '100%',
    height: '250px',
    marginTop: '15px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  },
  map: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border 0.3s ease',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border 0.3s ease',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 15px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s',
    fontWeight: 'bold',
  },
};

// Adding hover effects via CSS classes
const stylesCSS = `
  .hover-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
  .hover-link:hover {
    color: #1f618d;
  }
`;

// Adding styles to the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = stylesCSS;
document.head.appendChild(styleSheet);

export default Contact;
