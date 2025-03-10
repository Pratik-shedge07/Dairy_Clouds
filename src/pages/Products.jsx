import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaShoppingCart, FaMoneyBillWave, FaSearch } from "react-icons/fa";

function Products() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setCart(savedCart);
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [cart, orders]);

  
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
  const filteredProducts = allProducts.filter((product) =>
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    setOrders((prevOrders) => [...prevOrders, product]);
    toast.success(`Proceeding to buy ${product.name}!`);
  };

  return (
    <div style={{ padding: "20px", marginTop: "80px" }}> {/* Added margin-top for spacing */}
      <Toaster />

      {/* Search Bar and Tabs */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "10px 0" }}>
        <div>
          {["All", "Dairy", "Beverages", "Desserts"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={btnTabStyle(selectedCategory === category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchBoxStyle}
          />
          <FaSearch style={searchIconStyle} />
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", padding: "10px" }}>
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            style={productCardStyle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
              <button onClick={() => handleAddToCart(product)} style={btnStyle}>
                <FaShoppingCart /> Add to Cart
              </button>
              <button onClick={() => handleBuyNow(product)} style={btnStyle}>
                <FaMoneyBillWave /> Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Styles
const btnStyle = {
  backgroundColor: "#00796B",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "8px 15px",
  cursor: "pointer",
};

const btnTabStyle = (isActive) => ({
  marginRight: "10px",
  backgroundColor: isActive ? "#00796B" : "#ccc",
  color: isActive ? "#fff" : "#000",
  border: "none",
  borderRadius: "6px",
  padding: "8px 15px",
  cursor: "pointer",
});

const searchBoxStyle = {
  padding: "8px 30px 8px 10px",
  borderRadius: "6px",
  border: "2px solid #00796B",
  outline: "none",
  width: "200px",
};

const searchIconStyle = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#00796B",
};

const productCardStyle = {
  border: "2px solid #00796B",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#f0f8ff",
};

export default Products;