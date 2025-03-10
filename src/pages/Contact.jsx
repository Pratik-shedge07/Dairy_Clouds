import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

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

  const getBotResponse = (messages) => {
    const latestMessage = messages[messages.length - 1].text.toLowerCase();

    if (latestMessage.includes('hello')) return 'Hello! How can I help you today?';
    if (latestMessage.includes('price')) return 'We offer competitive pricing! Let me know what product you are looking for.';
    if (latestMessage.includes('product')) return 'Please visit our Products page for detailed information.';
    if (latestMessage.includes('time')) return `It's currently ${new Date().toLocaleTimeString()}.`;

    return "I'm here to assist you! Ask me about products, prices, or anything else.";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <h2 style={styles.heading}>Contact Us</h2>

      <div style={styles.contentContainer}>
        <div style={styles.card}>
          <h3 style={styles.subHeading}>Get in Touch</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
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

        <div style={styles.card}>
          <h3 style={styles.subHeading}>Our Contact Details</h3>
          <p style={styles.detailItem}><FaMapMarkerAlt style={styles.icon} /> Pune, India</p>
          <p style={styles.detailItem}><FaPhone style={styles.icon} /> <a href="tel:+917412589630" style={styles.link}>+91 7412589630</a></p>
          <p style={styles.detailItem}><FaEnvelope style={styles.icon} /> <a href="mailto:dairyclouds79@gmail.com" style={styles.link}>dairyclouds79@gmail.com</a></p>
        </div>
      </div>

      {/* Chat with Us Feature */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={styles.chatContainer}
      >
        <h3 style={styles.subHeading}>Chat with Us</h3>
        <div style={styles.chatBox}>
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              style={
                msg.sender === 'bot' ? styles.botMessage : styles.userMessage
              }
            >
              {msg.text}
            </div>
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
    </motion.div>
  );
}

const styles = {
  container: { padding: '40px', fontFamily: 'Arial, sans-serif' },
  heading: { textAlign: 'center', fontSize: '28px', marginBottom: '20px' },
  contentContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  card: { flex: 1, backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '12px' },
  subHeading: { marginBottom: '15px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', border: '2px solid #ddd', borderRadius: '8px' },
  textarea: { padding: '10px', height: '100px', border: '2px solid #ddd', borderRadius: '8px' },
  button: { padding: '10px 20px', backgroundColor: '#0078FF', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  chatContainer: { marginTop: '30px', backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '12px' },
  chatBox: { maxHeight: '300px', overflowY: 'auto', backgroundColor: '#fff', borderRadius: '8px', padding: '10px' },
  chatForm: { display: 'flex', gap: '10px', marginTop: '10px' },
  chatInput: { flex: 1, padding: '10px', border: '2px solid #ddd', borderRadius: '8px' },
  botMessage: { backgroundColor: '#e3f2fd', padding: '8px', borderRadius: '8px', marginBottom: '5px' },
  userMessage: { backgroundColor: '#d1f7c4', padding: '8px', borderRadius: '8px', marginBottom: '5px' },
};

export default Contact;