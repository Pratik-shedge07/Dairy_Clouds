import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null); 
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result); // Convert image to base64
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !contact || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const userData = {
      name,
      email,
      contact,
      profilePic: profilePic || "https://via.placeholder.com/120", // Default profile pic
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate("/")} style={styles.closeButton}>
          ❌
        </button>
        <h2 style={styles.title}>Dairy Clouds - Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="contact" style={styles.label}>Contact Number</label>
            <input
              type="tel"
              id="contact"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="profilePic" style={styles.label}>Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.loginButton} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" },
  card: { backgroundColor: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", width: "350px", position: "relative" },
  closeButton: { position: "absolute", top: "10px", right: "10px", background: "none", border: "none", fontSize: "18px", cursor: "pointer" },
  title: { marginBottom: "20px", color: "#333" },
  inputContainer: { marginBottom: "15px", textAlign: "left" },
  label: { display: "block", marginBottom: "5px", color: "#333" },
  input: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" },
  passwordContainer: { position: "relative" },
  toggleButton: { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#00796B", cursor: "pointer" },
  loginButton: { width: "100%", padding: "10px", backgroundColor: "#00796B", color: "white", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer", marginTop: "10px" },
  error: { color: "red", fontSize: "14px", marginTop: "10px" }
};

export default Login;
