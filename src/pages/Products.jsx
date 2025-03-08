import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

function Products() {
  const allProducts = [
    { id: 1, name: "Milk", price: "₹50", image: "https://5.imimg.com/data5/SP/JB/KZ/SELLER-108598973/fresh-milk1-jpg-500x500.jpg", category: "Dairy" },
    { id: 2, name: "Cheese", price: "₹200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSya2sYLwnUvAk7hAQnfcwcR9ppNQdnCYGyVQ&s", category: "Dairy" },
    { id: 3, name: "Butter", price: "₹150", image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-07/healthiest-butter-jp-240709-8ce75e.jpg", category: "Dairy" },
    { id: 4, name: "Curd", price: "₹80", image: "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg", category: "Dairy" },
    { id: 5, name: "Paneer", price: "₹250", image: "https://umamigirl.com/wp-content/uploads/2023/04/How-to-Make-Paneer-at-Home-Umami-Girl.jpg", category: "Dairy" },
    { id: 6, name: "Ghee", price: "₹500", image: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/04/22150252/Ghee.jpg", category: "Dairy" },
    { id: 7, name: "Yogurt", price: "₹100", image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323169/greek-yoghurt-in-bowl.jpg", category: "Dairy" },
    { id: 8, name: "Flavored Milk", price: "₹60", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2lT-Ys1lHFzaxP9MAsdcxg7qZcl2gM3mAA&s", category: "Beverages" },
    { id: 9, name: "Cold Coffee", price: "₹120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWD9fE9msA5pOEfmtp9lehDXj4LXNV9NIjw&s", category: "Beverages" },
    { id: 10, name: "Strawberry Milkshake", price: "₹130", image: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg", category: "Beverages" },
    { id: 11, name: "Vanilla Ice Cream", price: "₹180", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfq_4IZzKvwWOAG0jf3lksWqL7QBLN9ntiw&s", category: "Desserts" },
    { id: 12, name: "Chocolate Ice Cream", price: "₹200", image: "https://campcochocolates.com/wp-content/uploads/2020/05/homemade-chocolate-icecream.jpg", category: "Desserts" },
    { id: 21, name: "Rasgulla", price: "₹220", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKH7AuPhCPm39ZDegkyqrbymtedzGepz53w&s", category: "Desserts" },
    { id: 19, name: "Kulfi", price: "₹90", image: "https://c.ndtvimg.com/2022-03/bt1hei5o_kulfi_625x300_14_March_22.jpg", category: "Desserts" },
    { id: 16, name: "Lassi", price: "₹90", image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/lassi-recipe-1.jpg", category: "Beverages" },
    { id: 17, name: "Mango Shake", price: "₹100", image: "https://getinspiredeveryday.com/wp-content/uploads/2023/03/Mango-Smoothie-Get-Inspired-Everyday-8.jpg", category: "Beverages" },
    { id: 18, name: "Green Tea", price: "₹70", image: "https://assets.epicurious.com/photos/5887d21b5f76684c78cf57db/16:9/w_2560%2Cc_limit/green_tea_24012017.jpg", category: "Beverages" },
    { id: 13, name: "Fresh Cream", price: "₹180", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgmrHxs4IK_-0vUrGnsSOp6eiShHjV7rx7Q&s", category: "Dairy" },
    { id: 14, name: "Skimmed Milk", price: "₹60", image: "https://ariso.blob.core.windows.net/ariso/ruploads/31052022-skimmed-vs-toned-milk-whats-the-difference.jpg", category: "Dairy" },
    { id: 15, name: "Buttermilk", price: "₹40", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbpAaQOlwd8hGpKxzwYpuM9NnzA3mwK4alQ&s", category: "Dairy" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "All" || product.category === filter)
    );
  });

  const handleAddToCart = (productName) => {
    toast.success(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    toast.success(`Proceeding to buy ${productName}!`);
  };

  return (
    <div style={styles.container}>
      <Toaster />
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

      <div style={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>
            <div style={styles.buttonContainer}>
              <button
                style={styles.addToCart}
                onClick={() => handleAddToCart(product.name)}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#005f56")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#00796B")}
              >
                <FaShoppingCart style={styles.cartIcon} /> Add to Cart
              </button>
              <button
                style={styles.buyNow}
                onClick={() => handleBuyNow(product.name)}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF5722")}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center", marginTop: "50px" },
  searchFilterContainer: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px", padding: "10px" },
  searchBox: { display: "flex", alignItems: "center", border: "2px solid #00796B", borderRadius: "8px", padding: "8px 12px", width: "250px", backgroundColor: "#fff" },
  searchIcon: { marginRight: "8px", color: "#00796B" },
  searchInput: { border: "none", outline: "none", width: "100%" },
  filterDropdown: { padding: "10px", borderRadius: "8px", border: "2px solid #00796B", backgroundColor: "#fff", fontSize: "16px", cursor: "pointer" },
  productsContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", justifyContent: "center", padding: "20px" },
  card: {
    border: "2px solid #00796B",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "8px 8px 20px rgba(0,0,0,0.3)",
      borderColor: "#005f56",
    },
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
  productName: { fontSize: "22px", margin: "10px 0", fontWeight: "bold", color: "#333" },
  productPrice: { fontSize: "20px", color: "#00796B", fontWeight: "bold", marginBottom: "15px" },
  buttonContainer: { display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "15px" },
  addToCart: {
    backgroundColor: "#00796B",
    color: "#fff",
    border: "none",
    padding: "12px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    transition: "background 0.3s ease",
  },
  cartIcon: { marginRight: "5px" },
  buyNow: {
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    padding: "12px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.3s ease",
  },
};

export default Products;