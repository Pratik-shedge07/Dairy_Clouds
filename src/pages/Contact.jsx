import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      <div style={styles.contentContainer}>
        {/* Contact Form Section */}
        <div style={styles.card}>
          <h3 style={styles.subHeading}>Get in Touch</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div style={styles.card}>
          <h3 style={styles.subHeading}>Our Contact Details</h3>
          <p style={styles.detailItem}><FaMapMarkerAlt style={styles.icon} /> Pune, India</p>
          <p style={styles.detailItem}><FaPhone style={styles.icon} /> +91 7412589630</p>
          <p style={styles.detailItem}><FaEnvelope style={styles.icon} /> dairyclouds79@gmail.com</p>

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
    backgroundColor: '#ffffff',  // Changed to white background
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 16px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
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
  },
  subHeading: {
    fontSize: '26px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#34495e',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  icon: {
    color: '#3498db',
    fontSize: '20px',
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
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 15px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default Contact;
