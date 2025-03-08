import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login-lite";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from React Icons

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    setUser({
      name: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    });
    alert("Google Login Successful!");
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
    setError("Google Login Failed. Please try again.");
  };

  const handleFacebookSuccess = (response) => {
    console.log("Facebook Login Success:", response);
    setUser({
      name: response.name,
      email: response.email,
      image: response.picture.data.url,
    });
    alert("Facebook Login Successful!");
  };

  const handleFacebookFailure = (error) => {
    console.error("Facebook Login Failed:", error);
    setError("Facebook Login Failed. Please try again.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Dairy Clouds - Login</h2>
        {user ? (
          <div style={styles.userProfile}>
            <img src={user.image} alt="Profile" style={styles.profileImage} />
            <h3>Welcome, {user.name}!</h3>
            <p>Email: {user.email}</p>
            <button
              onClick={() => setUser(null)}
              style={styles.logoutButton}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#c53030")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#e53e3e")}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div style={styles.inputContainer}>
                <label htmlFor="email" style={styles.label}>
                  Email
                </label>
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
                <label htmlFor="password" style={styles.label}>
                  Password
                </label>
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
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {error && <p style={styles.error}>{error}</p>}
              <button
                type="submit"
                style={styles.loginButton}
                disabled={loading}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#005f56")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#00796B")}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div style={styles.socialLogin}>
              <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log("Google Login Success:", credentialResponse);
                    alert("Google Login Successful!");
                  }}
                  onError={() => {
                    console.log("Google Login Failed");
                  }}
                />
              </GoogleOAuthProvider>

              <FacebookLogin
                appId="YOUR_FACEBOOK_APP_ID"
                onSuccess={(response) => console.log("Facebook login success:", response)}
                onFailure={() => console.log("Facebook login failed")}
              />
            </div>
            <div style={styles.linksContainer}>
              <a href="#" style={styles.link}>
                Forgot Password?
              </a>
              <a href="#" style={styles.link}>
                New User? Register
              </a>
            </div>
          </>
        )}
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
    backgroundColor: "#f0f4f8",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
    maxWidth: "90%",
  },
  title: {
    marginBottom: "25px",
    color: "#2d3748",
    fontSize: "24px",
    fontWeight: "600",
  },
  inputContainer: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#4a5568",
    fontSize: "14px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#4a5568",
    backgroundColor: "#f7fafc",
    transition: "border-color 0.3s ease",
  },
  passwordContainer: {
    position: "relative",
  },
  toggleButton: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#00796B",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#00796B",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background-color 0.3s ease",
  },
  socialLogin: {
    marginTop: "20px",
  },
  linksContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#00796B",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  error: {
    color: "#e53e3e",
    fontSize: "14px",
    marginTop: "10px",
    fontWeight: "500",
  },
  userProfile: {
    textAlign: "center",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
    border: "3px solid #00796B",
  },
  logoutButton: {
    padding: "12px",
    backgroundColor: "#e53e3e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
};

export default Login;