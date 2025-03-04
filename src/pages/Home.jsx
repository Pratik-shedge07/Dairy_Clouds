import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div
        style={{
          ...styles.slideshow,
          backgroundImage: `url(${images[currentIndex]})`
        }}
      >
        <div style={styles.overlay}>
          <h1>Welcome to Dairy Cloud</h1>
          <p>Manage your dairy business efficiently.</p>
          <div style={styles.buttons}>
            <button onClick={() => navigate("/login")} style={styles.btn}>Get Started</button>
            <button onClick={() => navigate("/products")} style={styles.btn}>Explore</button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.infoSection}>
        <h2 style={styles.sectionTitle}>About Dairy Cloud</h2>
        <p style={styles.description}>
          Dairy Cloud is an all-in-one solution to manage your dairy business. 
          From tracking milk production to managing sales, we offer an intuitive platform to streamline operations.
        </p>

        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.featureContainer}>
          <div style={styles.featureCard}>
            <span style={styles.icon}>📊</span>
            <h3>Track Milk In & Out</h3>
            <p>Monitor your daily milk production and distribution with ease.</p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.icon}>💰</span>
            <h3>Monitor Earnings</h3>
            <p>Keep track of your revenue and expenses to maximize profits.</p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.icon}>👥</span>
            <h3>Manage Customers</h3>
            <p>Store customer and supplier details for seamless communication.</p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.icon}>📦</span>
            <h3>Inventory Management</h3>
            <p>Maintain stock levels and track dairy product availability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    width: "100%",
    height: "auto",
    overflowY: "auto",
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
    backgroundColor: "rgba(198, 196, 196, 0.7)", // Light overlay for visibility
    color: "#333",
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
  btnHover: {
    backgroundColor: "#E64A19",
  },
  infoSection: {
    padding: "50px 20px",
    backgroundColor: "#f4f4f4", // Light theme
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
  featureCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    fontSize: "40px",
    display: "block",
    marginBottom: "10px",
  },
};
export default Home;
