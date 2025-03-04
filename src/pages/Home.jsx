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
          <h1 style={styles.mainTitle}>Welcome to Dairy Cloud</h1>
          <p style={styles.subTitle}>Manage your dairy business efficiently.</p>
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

        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <p style={styles.description}>
          Our platform offers seamless integration with your existing workflow. Here’s why Dairy Cloud is the best choice:
        </p>
        <ul style={styles.list}>
          <li>✔️ User-friendly interface for smooth navigation</li>
          <li>✔️ Secure and reliable data management</li>
          <li>✔️ Automated reports for better decision-making</li>
          <li>✔️ 24/7 customer support for all your needs</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonialCard}>
            <p>"Dairy Cloud has transformed the way we manage our dairy business. Highly recommended!"</p>
            <p style={styles.testimonialAuthor}>- John Doe, Dairy Farmer</p>
          </div>
          <div style={styles.testimonialCard}>
            <p>"The inventory management feature is a game-changer. It saves us so much time!"</p>
            <p style={styles.testimonialAuthor}>- Jane Smith, Dairy Owner</p>
          </div>
          <div style={styles.testimonialCard}>
            <p>"Excellent customer support and easy-to-use interface. Love it!"</p>
            <p style={styles.testimonialAuthor}>- Mike Johnson, Dairy Manager</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Transform Your Dairy Business?</h2>
        <p style={styles.ctaDescription}>Join Dairy Cloud today and experience the future of dairy management.</p>
        <button onClick={() => navigate("/login")} style={styles.ctaButton}>Sign Up Now</button>
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
    backgroundColor: "rgba(134, 130, 130, 0.7)",
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
  mainTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "24px",
    color: "#fff",
    marginBottom: "20px",
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
    backgroundColor: "#f4f4f4",
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
  list: {
    textAlign: "left",
    maxWidth: "700px",
    margin: "20px auto",
    fontSize: "18px",
  },
  featureContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    textAlign: "center",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  testimonialsSection: {
    padding: "50px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  testimonialsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  testimonialCard: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  testimonialAuthor: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  ctaSection: {
    padding: "50px 20px",
    backgroundColor: "#FF5722",
    color: "#fff",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  ctaDescription: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#fff",
    color: "#FF5722",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default Home;