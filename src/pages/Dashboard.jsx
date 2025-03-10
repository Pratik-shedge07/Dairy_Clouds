import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSignOutAlt, FaShoppingCart, FaBoxOpen, FaPencilAlt, FaTimes } from "react-icons/fa";
import "animate.css";
import userImage from "../icons/man.png";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    contact: "Not Provided",
    profilePic: userImage,
  });

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (savedUser) setUser(savedUser);
    setCart(savedCart);
    setOrders(savedOrders);
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({ ...user, profilePic: e.target.result });
        localStorage.setItem("user", JSON.stringify({ ...user, profilePic: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn" style={styles.dashboardContainer}>
      <div style={styles.dashboardBox} className="animate__animated animate__zoomIn">
        <div style={styles.hamburgerMenuTopRight}>
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburgerBtn}>
            <FaBars />
          </button>
          {menuOpen && (
            <div style={styles.menuDropdown}>
              <button style={styles.logoutBtn} onClick={handleLogout}>
                <FaSignOutAlt style={styles.menuIcon} /> Logout
              </button>
            </div>
          )}
        </div>

        <div style={styles.userSection} className="animate__animated animate__fadeInUp">
          <div style={styles.profileWrapper}>
            <img src={user.profilePic || userImage} alt="Profile" style={styles.profilePic} />
            <label htmlFor="imageUpload" style={styles.editIcon}>
              <FaPencilAlt />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>

          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userEmail}>{user.email}</p>
          <p style={styles.userContact}>Contact: {user.contact}</p>
        </div>

        <div style={styles.dashboardSections}>
          <div style={styles.dashboardCard}>
            <FaBoxOpen style={styles.cardIconBig} />
            <h2 style={styles.cardTitle}>Your Orders</h2>
            <p style={styles.cardText}>{orders.length} items in your orders.</p>
            <button style={styles.improvedBtn} onClick={() => setShowOrders(true)}>View Orders</button>
          </div>
          <div style={styles.dashboardCard}>
            <FaShoppingCart style={styles.cardIconBig} />
            <h2 style={styles.cardTitle}>Your Cart</h2>
            <p style={styles.cardText}>{cart.length} items in your cart.</p>
            <button style={styles.improvedBtn} onClick={() => setShowCart(true)}>View Cart</button>
          </div>
        </div>

        {showCart && (
          <div style={styles.popupBox}>
            <button style={styles.closeBtn} onClick={() => setShowCart(false)}><FaTimes /></button>
            <h3>Your Cart</h3>
            {cart.length ? cart.map((item) => <p key={item.id}>{item.name}</p>) : <p>No items in cart.</p>}
          </div>
        )}

        {showOrders && (
          <div style={styles.popupBox}>
            <button style={styles.closeBtn} onClick={() => setShowOrders(false)}><FaTimes /></button>
            <h3>Your Orders</h3>
            {orders.length ? orders.map((item) => <p key={item.id}>{item.name}</p>) : <p>No orders yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
const styles = {
  dashboardContainer: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#eef2f3", padding: "20px" },
  dashboardBox: { width: "80%", maxWidth: "900px", background: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)", textAlign: "center", position: "relative" },
  hamburgerMenuTopRight: { position: "absolute", top: "10px", right: "15px", zIndex: "1001" },
  profilePic: { width: "80px", height: "80px", borderRadius: "50%", border: "3px solid #FF5722", marginBottom: "10px" },
  dashboardSections: { display: "flex", gap: "20px", 
justifyContent: "center", marginTop: "20px" },
  popupBox: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px", background: "#fff", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", borderRadius: "12px", padding: "10px", overflowY: "auto" },
  closeBtn: { background: "#D32F2F", color: "#fff", border: "none", borderRadius: "50%", width: "24px", height: "24px", cursor: "pointer", position: "absolute", top: "5px", right: "5px" },
  
  improvedBtn: { background: "#4CAF50", color: "#fff", padding: "10px 20px", borderRadius: "8px", border: "none", cursor: "pointer", transition: "background 0.3s", fontWeight: "bold" },
  improvedBtnHover: { background: "#388E3C" },
  
  cardIconBig: { fontSize: "60px", color: "#2196F3", marginBottom: "10px" },

  logoutBtn: { background: "#FF5722", color: "#fff", padding: "10px 20px", marginTop:"10px", borderRadius: "8px", border: "none", cursor: "pointer", transition: "background 0.3s", display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", width: "100%", textAlign: "left" },
  menuIcon: { fontSize: "18px" }
};

export default Dashboard;
