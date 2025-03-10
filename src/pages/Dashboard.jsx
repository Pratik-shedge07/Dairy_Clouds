import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSignOutAlt, FaShoppingCart, FaBoxOpen, FaPencilAlt, FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

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
  const [products] = useState([
    { id: 1, name: "Butter", price: 150, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Milk", price: 40, quantity: 1, image: "https://via.placeholder.com/100" },
  ]);

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
    setCart([]);
    setOrders([]);
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

  const increaseQuantity = (index, source) => {
    const updatedSource = [...source];
    updatedSource[index].quantity++;
    if (source === cart) {
      setCart(updatedSource);
      localStorage.setItem("cart", JSON.stringify(updatedSource));
    }
  };

  const decreaseQuantity = (index, source) => {
    const updatedSource = [...source];
    if (updatedSource[index].quantity > 1) {
      updatedSource[index].quantity--;
    } else {
      updatedSource.splice(index, 1);
    }
    if (source === cart) {
      setCart(updatedSource);
      localStorage.setItem("cart", JSON.stringify(updatedSource));
    }
  };

  const deleteProduct = (index, source) => {
    const updatedSource = [...source];
    updatedSource.splice(index, 1);
    if (source === cart) {
      setCart(updatedSource);
      localStorage.setItem("cart", JSON.stringify(updatedSource));
    } else {
      setOrders(updatedSource);
      localStorage.setItem("orders", JSON.stringify(updatedSource));
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryCharge = 40; // Delivery charge
    return totalAmount + deliveryCharge;
  };

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn">
            <FaBars />
          </button>
          {menuOpen && (
            <div className="menu-dropdown">
              <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>

        <div className="user-section">
          <div className="profile-wrapper">
            <img src={userImage || user.profilePic} alt="Profile" className="profile-pic" />
            <label htmlFor="imageUpload" className="edit-icon">
              <FaPencilAlt />
            </label>
            <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
          </div>

          <h3 className="user-name">{user.name}</h3>
          <p className="user-email">{user.email}</p>
          <p className="user-contact">Contact: {user.contact}</p>
        </div>

        <div className="dashboard-sections">
          <div className="dashboard-card">
            <FaBoxOpen className="card-icon-big" />
            <h2>Your Orders</h2>
            <button className="improved-btn" onClick={() => setShowOrders(true)}>View Orders</button>
          </div>
          <div className="dashboard-card">
            <FaShoppingCart className="card-icon-big" />
            <h2>Your Cart</h2>
            <button className="improved-btn" onClick={() => setShowCart(true)}>View Cart</button>
          </div>
        </div>

        {/* Cart Popup */}
        {showCart && (
          <div className="popup-box">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowCart(false)}><FaTimes /></button>
              <h3>Your Cart</h3>
              {cart.length ? (
                cart.map((item, index) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <p>{item.name} - ₹{item.price}</p>
                    <div className="quantity-controls">
                      <FaMinus onClick={() => decreaseQuantity(index, cart)} />
                      <span>{item.quantity}</span>
                      <FaPlus onClick={() => increaseQuantity(index, cart)} />
                    </div>
                    <FaTrash onClick={() => deleteProduct(index, cart)} className="delete-icon" />
                  </div>
                ))
              ) : (
                <p>No items in cart.</p>
              )}
              <h3>Total Bill: ₹{calculateTotal(cart)}</h3>
            </div>
          </div>
        )}

        {/* Orders Popup */}
        {showOrders && (
          <div className="popup-box">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowOrders(false)}><FaTimes /></button>
              <h3>Your Orders</h3>
              {orders.length ? (
                orders.map((item, index) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <p>{item.name} - ₹{item.price}</p>
                    <span>Quantity: {item.quantity}</span>
                    <h4>Total: ₹{item.price * item.quantity}</h4>
                    <FaTrash onClick={() => deleteProduct(index, orders)} className="delete-icon" />
                  </div>
                ))
              ) : (
                <p>No orders placed yet.</p>
              )}
              <h3>Total Bill: ₹{calculateTotal(orders)}</h3>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .dashboard-container {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px 20px 20px;
          background-color: #f0f0f0;
          margin-top: 100px; /* To prevent overlap with navbar */
        }

        .dashboard-box {
          width: 100%;
          max-width: 1200px;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 40px;
          position: relative;
        }

        .hamburger-menu {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .hamburger-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .menu-dropdown {
          position: absolute;
          top: 40px;
          right: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .logout-btn {
          display: block;
          padding: 10px;
          background-color: #f44336;
          color: white;
          border: none;
          text-align: center;
          border-radius: 8px;
          cursor: pointer;
        }

        .logout-btn:hover {
          background-color: #e53935;
        }

        .user-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }

        .profile-wrapper {
          position: relative;
          margin-bottom: 15px;
        }

        .profile-pic {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
        }

        .edit-icon {
          position: absolute;
          bottom: 5px;
          right: 5px;
          cursor: pointer;
          background-color: #fff;
          border-radius: 50%;
          padding: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .user-name {
          font-size: 22px;
          font-weight: bold;
          margin: 15px 0;
        }

        .user-email,
        .user-contact {
          color: #555;
          font-size: 16px;
        }

        .dashboard-sections {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .dashboard-card {
          background-color: #f7f7f7;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          width: 45%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-icon-big {
          font-size: 40px;
          color: #007bff;
        }

        .improved-btn {
          margin-top: 20px;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .improved-btn:hover {
          background-color: #0056b3;
        }

        .popup-box {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-content {
          background: white;
          padding: 30px;
          border-radius: 8px;
          width: 80%;
          max-width: 600px;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          color: black;
          font-size: 24px;
          cursor: pointer;
        }

        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .cart-item-img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          margin-right: 15px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          margin-left: 15px;
        }

        .quantity-controls span {
          margin: 0 10px;
        }

        .delete-icon {
          cursor: pointer;
          color: red;
          margin-left: 15px;
        }

        .delete-icon:hover {
          color: darkred;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
