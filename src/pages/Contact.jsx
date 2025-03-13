import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Contact() {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle chat message submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text: userMessage }];
    setChatMessages(newMessages);
    setUserMessage('');

    setTimeout(() => {
      const botReply = getBotResponse(newMessages);
      setChatMessages([...newMessages, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  // Generate bot response
  const getBotResponse = (messages) => {
    const latestMessage = messages[messages.length - 1].text.toLowerCase();

    if (latestMessage.includes('hello')) return 'Hello! How can I help you today?';
    if (latestMessage.includes('price')) return 'We offer competitive pricing! Let me know what product you are looking for.';
    if (latestMessage.includes('product')) return 'Please visit our Products page for detailed information.';
    if (latestMessage.includes('time')) return `It's currently ${new Date().toLocaleTimeString()}.`;

    return "I'm here to assist you! Ask me about products, prices, or anything else.";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setShowPopup(true);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollButton(true);
      else setShowScrollButton(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FAQ data
  const faqs = [
    { question: 'What are your working hours?', answer: 'We are open from 9 AM to 6 PM, Monday to Friday.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide!' },
    { question: 'How can I track my order?', answer: 'You will receive a tracking link via email once your order is shipped.' },
  ];

  // Theme styles
  const themeStyles = {
    container: {
      ...styles.container,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    },
    card: {
      ...styles.card,
      backgroundColor: isDarkMode ? '#333' : '#f3f4f6',
      color: isDarkMode ? '#fff' : '#000',
    },
    input: {
      ...styles.input,
      backgroundColor: isDarkMode ? '#444' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    },
    textarea: {
      ...styles.textarea,
      backgroundColor: isDarkMode ? '#444' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    },
    chatBox: {
      ...styles.chatBox,
      backgroundColor: isDarkMode ? '#444' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={themeStyles.container}
    >
      <h2 style={styles.heading}>Contact Us</h2>

      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} style={styles.toggleButton}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div style={styles.contentContainer}>
        {/* Contact Form */}
        <div style={themeStyles.card}>
          <h3 style={styles.subHeading}>Get in Touch</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={themeStyles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={themeStyles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}

            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={themeStyles.textarea}
            />
            {errors.message && <p style={styles.error}>{errors.message}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={styles.button}
            >
              Send Message ✉️
            </motion.button>
          </form>
        </div>

        {/* Contact Details */}
        <div style={themeStyles.card}>
          <h3 style={styles.subHeading}>Our Contact Details</h3>
          <p style={styles.detailItem}><FaMapMarkerAlt style={styles.icon} /> Pune, India</p>
          <p style={styles.detailItem}><FaPhone style={styles.icon} /> <a href="tel:+917412589630" style={styles.link}>+91 7412589630</a></p>
          <p style={styles.detailItem}><FaEnvelope style={styles.icon} /> <a href="mailto:dairyclouds79@gmail.com" style={styles.link}>dairyclouds79@gmail.com</a></p>

          {/* Social Media Links */}
          <h3 style={styles.subHeading}>Follow Us</h3>
          <p style={styles.detailItem}><FaFacebook style={styles.icon} /> <a href="https://facebook.com" style={styles.link}>Facebook</a></p>
          <p style={styles.detailItem}><FaTwitter style={styles.icon} /> <a href="https://twitter.com" style={styles.link}>Twitter</a></p>
          <p style={styles.detailItem}><FaInstagram style={styles.icon} /> <a href="https://instagram.com" style={styles.link}>Instagram</a></p>
          <p style={styles.detailItem}><FaLinkedin style={styles.icon} /> <a href="https://linkedin.com" style={styles.link}>LinkedIn</a></p>

          {/* Map Integration */}
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={styles.mapContainerStyle}
              zoom={15}
              center={{ lat: 18.5204, lng: 73.8567 }}
            >
              <Marker position={{ lat: 18.5204, lng: 73.8567 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <h3 style={styles.subHeading}>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>{faq.question}</h4>
            <p style={styles.faqAnswer}>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Chat with Us Feature */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={styles.chatContainer}
      >
        <h3 style={styles.subHeading}>Chat with Us</h3>
        <div style={themeStyles.chatBox}>
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={msg.sender === 'bot' ? styles.botMessage : styles.userMessage}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} style={styles.chatForm}>
          <input
            type="text"
            placeholder="Type a message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            style={styles.chatInput}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={styles.button}
          >
            Send
          </motion.button>
        </form>
      </motion.div>

      {/* Thank You Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={styles.popup}
        >
          Thank you! Your message has been sent.
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={styles.scrollButton}
        >
          ↑
        </motion.button>
      )}
    </motion.div>
  );
}

// Styles
const styles = {
  container: { padding: '40px', fontFamily: 'Arial, sans-serif' },
  heading: { textAlign: 'center', fontSize: '28px', marginBottom: '20px' },
  contentContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  card: { flex: 1, padding: '20px', borderRadius: '12px' },
  subHeading: { marginBottom: '15px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', border: '2px solid #ddd', borderRadius: '8px' },
  textarea: { padding: '10px', height: '100px', border: '2px solid #ddd', borderRadius: '8px' },
  button: { padding: '10px 20px', backgroundColor: '#0078FF', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  chatContainer: { marginTop: '30px', backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '12px' },
  chatBox: { maxHeight: '300px', overflowY: 'auto', borderRadius: '8px', padding: '10px' },
  chatForm: { display: 'flex', gap: '10px', marginTop: '10px' },
  chatInput: { flex: 1, padding: '10px', border: '2px solid #ddd', borderRadius: '8px' },
  botMessage: { backgroundColor: '#e3f2fd', padding: '8px', borderRadius: '8px', marginBottom: '5px' },
  userMessage: { backgroundColor: '#d1f7c4', padding: '8px', borderRadius: '8px', marginBottom: '5px' },
  detailItem: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' },
  icon: { fontSize: '18px' },
  link: { color: '#0078FF', textDecoration: 'none' },
  faqContainer: { marginTop: '30px', backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '12px' },
  faqItem: { marginBottom: '15px' },
  faqQuestion: { fontWeight: 'bold', marginBottom: '5px' },
  faqAnswer: { marginLeft: '20px' },
  popup: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  toggleButton: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#0078FF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#0078FF',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '20px',
  },
  mapContainerStyle: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
  },
};

export default Contact;