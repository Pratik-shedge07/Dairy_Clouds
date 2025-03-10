import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const images = [
  "https://c4.wallpaperflare.com/wallpaper/365/683/587/milk-cheese-sour-cream-dairy-products-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/334/1005/170/board-cheese-milk-bokeh-cheese-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/679/119/635/spoon-spoon-cheese-sour-cream-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1002/72/922/milk-cheese-grapes-nuts-wallpaper-preview.jpg",
  "https://www.shutterstock.com/image-photo/dairy-products-milk-cheese-sour-600nw-1273487506.jpg"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <motion.div
        style={{
          ...styles.heroSection,
          backgroundImage: `url(${images[currentIndex]})`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.heroOverlay}>
          <motion.h1
            style={styles.heroTitle}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to Dairy Cloud'z
          </motion.h1>
          <motion.p
            style={styles.heroSubtitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Your all-in-one solution for managing dairy operations efficiently.
          </motion.p>
          <div style={styles.heroButtons}>
            <motion.button
              onClick={() => navigate("/login")}
              style={styles.heroButtonPrimary}
              whileHover={{ scale: 1.05, backgroundColor: "#E64A19" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => navigate("/products")}
              style={styles.heroButtonSecondary}
              whileHover={{ scale: 1.05, backgroundColor: "#E64A19" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <div style={styles.aboutSection}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Dairy Cloud'z
        </motion.h2>
        <motion.p
          style={styles.sectionDescription}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Dairy Cloud'z is a powerful platform designed to streamline your dairy business operations. From tracking milk production to managing sales and inventory, we provide the tools you need to succeed.
        </motion.p>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>
        <div style={styles.featuresGrid}>
          {[
            { icon: "📊", title: "Track Milk In & Out", description: "Monitor daily milk production and distribution with ease." },
            { icon: "💰", title: "Monitor Earnings", description: "Track revenue and expenses to maximize profits." },
            { icon: "👥", title: "Manage Customers", description: "Store customer and supplier details for seamless communication." },
            { icon: "📦", title: "Inventory Management", description: "Maintain stock levels and track product availability." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    width: "100%",
    height: "auto",
    paddingTop: "80px", // Adjust this value to match the height of your navigation bar
  },
  heroSection: {
    height: "calc(100vh - 80px)", // Adjust height to account for the navigation bar
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heroOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better contrast
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff", // White text for contrast
    "@media (max-width: 768px)": {
      fontSize: "36px",
    },
    "@media (max-width: 480px)": {
      fontSize: "28px",
    },
  },
  heroSubtitle: {
    fontSize: "24px",
    marginBottom: "40px",
    color: "#f0f0f0", // Light gray for subtlety
    "@media (max-width: 768px)": {
      fontSize: "18px",
    },
    "@media (max-width: 480px)": {
      fontSize: "16px",
    },
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    "@media (max-width: 480px)": {
      flexDirection: "column",
      gap: "10px",
    },
  },
  heroButtonPrimary: {
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#FF5722",
    color: "white",
    cursor: "pointer",
    transition: "0.3s ease",
    "@media (max-width: 480px)": {
      padding: "12px 24px",
      fontSize: "16px",
    },
  },
  heroButtonSecondary: {
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "2px solid #FF5722",
    borderRadius: "5px",
    backgroundColor: "#FF5722",
    color: "white",
    cursor: "pointer",
    transition: "0.3s ease",
    "@media (max-width: 480px)": {
      padding: "12px 24px",
      fontSize: "16px",
    },
  },
  aboutSection: {
    padding: "80px 20px",
    backgroundColor: "#f9f9f9", // Light gray background
    textAlign: "center",
    "@media (max-width: 768px)": {
      padding: "60px 20px",
    },
    "@media (max-width: 480px)": {
      padding: "40px 20px",
    },
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333", // Dark gray for headings
    "@media (max-width: 768px)": {
      fontSize: "28px",
    },
    "@media (max-width: 480px)": {
      fontSize: "24px",
    },
  },
  sectionDescription: {
    fontSize: "18px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#555", // Medium gray for text
    "@media (max-width: 768px)": {
      fontSize: "16px",
    },
    "@media (max-width: 480px)": {
      fontSize: "14px",
    },
  },
  featuresSection: {
    padding: "80px 20px",
    backgroundColor: "#fff", // White background
    textAlign: "center",
    "@media (max-width: 768px)": {
      padding: "60px 20px",
    },
    "@media (max-width: 480px)": {
      padding: "40px 20px",
    },
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
  featureCard: {
    backgroundColor: "#f9f9f9", // Light gray background for cards
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "@media (max-width: 480px)": {
      padding: "20px",
    },
  },
  featureIcon: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#FF5722", // Primary color for icons
    "@media (max-width: 480px)": {
      fontSize: "36px",
    },
  },
  featureTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333", // Dark gray for titles
    "@media (max-width: 480px)": {
      fontSize: "20px",
    },
  },
  featureDescription: {
    fontSize: "16px",
    color: "#666", 
    lineHeight: "1.6",
    "@media (max-width: 480px)": {
      fontSize: "14px",
    },
  },
};

export default Home;