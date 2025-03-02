import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Products() {
  const allProducts = [
    { id: 1, name: "Milk", price: "₹50", image: "milk.jpg", category: "Dairy" },
    { id: 2, name: "Cheese", price: "₹200", image: "cheese.jpg", category: "Dairy" },
    { id: 3, name: "Butter", price: "₹150", image: "butter.jpg", category: "Dairy" },
    { id: 4, name: "Curd", price: "₹80", image: "curd.jpg", category: "Dairy" },
    { id: 5, name: "Paneer", price: "₹250", image: "paneer.jpg", category: "Dairy" },
    { id: 6, name: "Ghee", price: "₹500", image: "ghee.jpg", category: "Dairy" },
    { id: 7, name: "Yogurt", price: "₹100", image: "yogurt.jpg", category: "Dairy" },
    { id: 8, name: "Flavored Milk", price: "₹60", image: "flavored_milk.jpg", category: "Beverages" },
    { id: 9, name: "Cold Coffee", price: "₹120", image: "cold_coffee.jpg", category: "Beverages" },
    { id: 10, name: "Strawberry Milkshake", price: "₹130", image: "strawberry_milkshake.jpg", category: "Beverages" },
    { id: 11, name: "Vanilla Ice Cream", price: "₹180", image: "vanilla_ice_cream.jpg", category: "Desserts" },
    { id: 12, name: "Chocolate Ice Cream", price: "₹200", image: "chocolate_ice_cream.jpg", category: "Desserts" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "All" || product.category === filter)
    );
  });

  return (
    <div style={styles.container}>
      {/* Search and Filter Section */}
      <div style={styles.searchFilterContainer}>
        <div style={styles.searchBox}>
          <FaSearch style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.filterDropdown}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>

      {/* Products List */}
      <div style={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={`./images/${product.image}`} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.addToCart}>
                <FaShoppingCart style={styles.cartIcon} /> Add to Cart
              </button>
              <button style={styles.buyNow}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🔹 **CSS Styles**
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    marginTop: "80px",
  },
  searchFilterContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    padding: "10px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    width: "250px",
  },
  searchIcon: {
    marginRight: "8px",
    color: "#00796B",
  },
  searchInput: {
    border: "none",
    outline: "none",
    width: "100%",
  },
  filterDropdown: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Only 4 cards per row
    gap: "30px", // More spacing between cards
    justifyContent: "center",
    padding: "10px",
  },
  card: {
    border: "2px solid #00796B",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    width: "100%",
    maxWidth: "280px",
    margin: "auto",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  productName: {
    fontSize: "20px",
    margin: "10px 0",
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: "18px",
    color: "#00796B",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  addToCart: {
    backgroundColor: "#00796B",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  cartIcon: {
    marginRight: "5px",
  },
  buyNow: {
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Products;
