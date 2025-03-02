import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>Dairy Clouds </h1> 
        <img src="/dairy-products.png" alt="Dairy Cloud Logo" style={styles.logoImage} />
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="products" style={styles.link}>Products</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/about" style={styles.link}>About</Link>  
        <Link to="/contact" style={styles.link}>Contact us</Link>
        <Link to="/Login" style={styles.link}>Login</Link>

      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100%", // Full width
    height: "55px", // Slightly taller for better readability
    display: "flex",
    justifyContent: "space-between", // Properly spaced elements
    alignItems: "center",
    padding: "0 60px", // Adjusted spacing
    background: "linear-gradient(to right, #C19A6B, #8B5E3C)", // Gradient Beige
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "50px", // Adjust size of the logo
    height: "50px",
    marginRight: "20px", 
    marginLeft: "20px", // Added spacing for better alignment
  },
  logo: {
    fontSize: "30px", // Increased font size for better visibility
    fontWeight: "bold",
    color: "#FFF5E1", // Light cream text
  },
  links: {
    display: "flex",
    gap: "40px", // Increased spacing for even distribution
    justifyContent: "center",
    flexGrow: 1, // Ensures links take equal space
  },
  link: {
    textDecoration: "none",
    color: "#3E2723", // Dark Brown
    fontSize: "20px", // Increased font size
    fontWeight: "bold",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease-in-out",
  },
  linkHover: {
    background: "#A67B5B", 
    color: "#fff",
  }
};

export default Navbar;
