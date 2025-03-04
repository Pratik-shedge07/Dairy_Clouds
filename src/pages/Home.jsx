import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const images = [
  "https://c4.wallpaperflare.com/wallpaper/365/683/587/milk-cheese-sour-cream-dairy-products-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/334/1005/170/board-cheese-milk-bokeh-cheese-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/679/119/635/spoon-spoon-cheese-sour-cream-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1002/72/922/milk-cheese-grapes-nuts-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/117/977/111/food-milk-splash-wallpaper-preview.jpg"
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
      {/* Slideshow Section */}
      <motion.div
        style={{
          ...styles.slideshow,
          backgroundImage: `url(${images[currentIndex]})`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.overlay}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to Dairy Cloud
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Manage your dairy business efficiently.
          </motion.p>
          <div style={styles.buttons}>
            <motion.button
              onClick={() => navigate("/login")}
              style={styles.btn}
              whileHover={{ scale: 1.1, backgroundColor: "#E64A19" }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => navigate("/products")}
              style={styles.btn}
              whileHover={{ scale: 1.1, backgroundColor: "#E64A19" }}
              whileTap={{ scale: 0.9 }}
            >
              Explore
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Info Section */}
      <div style={styles.infoSection}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Dairy Cloud
        </motion.h2>
        <motion.p
          style={styles.description}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Dairy Cloud is an all-in-one solution to manage your dairy business. From
          tracking milk production to managing sales, we offer an intuitive
          platform to streamline operations.
        </motion.p>

        <motion.h2
          style={styles.sectionTitle}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>
        <div style={styles.featureContainer}>
          {[
            { icon: "📊", title: "Track Milk In & Out", description: "Monitor your daily milk production and distribution with ease." },
            { icon: "💰", title: "Monitor Earnings", description: "Keep track of your revenue and expenses to maximize profits." },
            { icon: "👥", title: "Manage Customers", description: "Store customer and supplier details for seamless communication." },
            { icon: "📦", title: "Inventory Management", description: "Maintain stock levels and track dairy product availability." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={styles.icon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
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
  },
  slideshow: {
    paddingTop: "550px",
    width: "100%",
    height: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for better contrast
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginTop: "20px",
  },
  btn: {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#FF5722",
    color: "white",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  infoSection: {
    padding: "50px 20px",
    backgroundColor: "#f9f9f9", // Light theme
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "15px",
    borderBottom: "2px solid #FF5722",
    display: "inline-block",
    paddingBottom: "5px",
  },
  description: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
  featureContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  icon: {
    fontSize: "40px",
    display: "block",
    marginBottom: "10px",
  },
};

export default Home;