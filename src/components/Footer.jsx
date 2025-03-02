import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Dairy Cloud. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: { textAlign: "center", padding: "10px", background: "#333", color: "#fff", marginTop: "20px" }
};

export default Footer;
