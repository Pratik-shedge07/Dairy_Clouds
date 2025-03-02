import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1>Dairy Cloud</h1>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" },
  link: { marginLeft: "10px", textDecoration: "none", color: "#fff" }
};

export default Navbar;
