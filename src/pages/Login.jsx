import React from "react";

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Dairy Clouds - Login</h2>
        <input type="text" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.loginButton}>Login</button>
        <div style={styles.linksContainer}>
          <a href="#" style={styles.link}>Forgot Password?</a>
          <a href="#" style={styles.link}>New User? Register</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "320px",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00796B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  linksContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#00796B",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Login;
