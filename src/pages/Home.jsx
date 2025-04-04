import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
          Dairy Cloud'z is a powerful platform designed to streamline your dairy
          business operations. From tracking milk production to managing sales
          and inventory, we provide the tools you need to succeed.
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
            {
              icon: "📊",
              title: "Track Milk In & Out",
              description:
                "Monitor daily milk production and distribution with ease."
            },
            {
              icon: "💰",
              title: "Monitor Earnings",
              description: "Track revenue and expenses to maximize profits."
            },
            {
              icon: "👥",
              title: "Manage Customers",
              description:
                "Store customer and supplier details for seamless communication."
            },
            {
              icon: "📦",
              title: "Inventory Management",
              description:
                "Maintain stock levels and track product availability."
            }
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
    paddingTop: "80px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heroSection: {
    height: "calc(100vh - 80px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heroOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    fontSize: "52px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff",
    letterSpacing: "1px",
  },
  heroSubtitle: {
    fontSize: "22px",
    marginBottom: "40px",
    color: "#e0e0e0",
    maxWidth: "700px",
    lineHeight: "1.6",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  heroButtonPrimary: {
    padding: "14px 28px",
    fontSize: "17px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#FF5722",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "0.3s ease",
  },
  heroButtonSecondary: {
    padding: "14px 28px",
    fontSize: "17px",
    fontWeight: "600",
    border: "2px solid #FF5722",
    borderRadius: "8px",
    backgroundColor: "#FF5722",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "0.3s ease",
  },
  aboutSection: {
    padding: "80px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#222",
    letterSpacing: "0.5px",
  },
  sectionDescription: {
    fontSize: "18px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.7",
    color: "#444",
  },
  featuresSection: {
    padding: "80px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  featureCard: {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.07)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  featureIcon: {
    fontSize: "44px",
    marginBottom: "20px",
    color: "#FF5722",
  },
  featureTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#222",
  },
  featureDescription: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Home;
