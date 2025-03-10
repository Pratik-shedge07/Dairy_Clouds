import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser, FaSignOutAlt, FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import "animate.css";
import userImage from "../icons/man.png";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    contact: "Not Provided",
    profilePic: userImage,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser({ ...user, ...savedUser });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser({
      name: "Guest User",
      email: "guest@example.com",
      contact: "Not Provided",
      profilePic: userImage,
    });
    navigate("/login");
  };

  return (
    <div className="animate__animated animate__fadeIn" style={styles.dashboardContainer}>
      <div style={styles.dashboardBox} className="animate__animated animate__zoomIn">
        <div style={styles.hamburgerMenu}>
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburgerBtn}>
            <FaBars />
          </button>
          {menuOpen && (
            <div style={styles.menuDropdown}>
              <button style={styles.menuItem}>
                <FaUser style={styles.menuIcon} /> Profile
              </button>
              <button style={styles.menuItem} onClick={handleLogout}>
                <FaSignOutAlt style={styles.menuIcon} /> Logout
              </button>
            </div>
          )}
        </div>
        <h1 style={styles.dashboardTitle}>User Dashboard</h1>
        <div style={styles.userSection} className="animate__animated animate__fadeInUp">
          <img
            src={user.profilePic || userImage}
            alt="Profile"
            style={styles.profilePic}
          />
          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userEmail}>{user.email}</p>
          <p style={styles.userContact}>Contact: {user.contact}</p>
        </div>
        <div style={styles.dashboardSections}>
          <div style={styles.dashboardCard} className="animate__animated animate__bounceInLeft">
            <FaBoxOpen style={styles.cardIcon} />
            <h2 style={styles.cardTitle}>Your Orders</h2>
            <p style={styles.cardText}>Track your recent orders and manage purchases.</p>
            <button style={styles.cardBtn}>View Orders</button>
          </div>
          <div style={styles.dashboardCard} className="animate__animated animate__bounceInRight">
            <FaShoppingCart style={styles.cardIcon} />
            <h2 style={styles.cardTitle}>Your Cart</h2>
            <p style={styles.cardText}>Review items in your cart before checkout.</p>
            <button style={styles.cardBtn}>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboardContainer: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5", padding: "20px" },
  dashboardBox: { width: "80%", maxWidth: "900px", background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)", textAlign: "center", position: "relative" },
  hamburgerMenu: { position: "absolute", top: "15px", right: "15px", zIndex: "1001" },
  hamburgerBtn: { fontSize: "24px", background: "none", border: "none", cursor: "pointer", color: "#333" },
  menuDropdown: { position: "absolute", top: "40px", right: "0", width: "160px", background: "#fff", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", overflow: "hidden", zIndex: "1002" },
  menuItem: { width: "100%", padding: "12px", textAlign: "left", display: "flex", alignItems: "center", fontSize: "16px", border: "none", background: "none", cursor: "pointer" },
  menuIcon: { marginRight: "10px", fontSize: "18px" },
  dashboardTitle: { fontSize: "30px", fontWeight: "bold", color: "#333", marginBottom: "25px" },
  profilePic: { width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #ddd", marginBottom: "10px" },
  userName: { fontSize: "22px", fontWeight: "bold", color: "#333" },
  userEmail: { fontSize: "16px", color: "#666" },
  userContact: { fontSize: "16px", color: "#666" },
  dashboardSections: { display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" },
  dashboardCard: { background: "white", padding: "25px", borderRadius: "12px", width: "300px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
  cardIcon: { fontSize: "50px", color: "#000", marginBottom: "15px" },
  cardTitle: { fontSize: "22px", fontWeight: "bold", color: "#333" },
  cardText: { fontSize: "16px", color: "#666", margin: "15px 0" },
  cardBtn: { background: "#FF5722", color: "white", padding: "12px 20px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" },
};

export default Dashboard;