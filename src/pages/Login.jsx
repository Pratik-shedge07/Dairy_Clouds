import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login-lite";

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
            <button onClick={() => setUser(null)} style={styles.logoutButton}>
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
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {error && <p style={styles.error}>{error}</p>}
              <button
                type="submit"
                style={styles.loginButton}
                disabled={loading}
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
  inputContainer: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  passwordContainer: {
    position: "relative",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#00796B",
    cursor: "pointer",
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
  socialLogin: {
    marginTop: "15px",
  },
  socialButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "5px 0",
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
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  userProfile: {
    textAlign: "center",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  logoutButton: {
    padding: "10px",
    backgroundColor: "#ff4444",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;