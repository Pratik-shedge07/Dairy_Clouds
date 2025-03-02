import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="dairy-products.png" alt="Dairy Cloud Logo" style={styles.logoImage} />
        <h1 style={styles.logo}>Dairy Clouds</h1>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "96%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 60px",
    background: "#00796B", // Teal Green
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
    width: "50px",
    height: "50px",
    marginRight: "12px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  links: {
    display: "flex",
    gap: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "background 0.3s ease-in-out",
  },
  linkHover: {
    background: "#B2DFDB", // Soft Aqua
    color: "#00796B",
  },
  button: {
    textDecoration: "none",
    color: "#FFFFFF",
    background: "#009688", // Vibrant Teal
    padding: "8px 15px",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Navbar;
