import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

function Services() {
  const [stock, setStock] = useState(1000); // Updated initial stock
  const [searchTerm, setSearchTerm] = useState("");

  const milkData = [
    { day: "Mon", milkIn: 300, milkOut: 200 },
    { day: "Tue", milkIn: 250, milkOut: 180 },
    { day: "Wed", milkIn: 280, milkOut: 220 },
    { day: "Thu", milkIn: 260, milkOut: 210 },
    { day: "Fri", milkIn: 320, milkOut: 250 },
  ];

  const transactions = [
    { receiptNo: "DMS1001", type: "Milk In", quantity: 300, date: "10 Mar 2025" },
    { receiptNo: "DMS1002", type: "Milk Out", quantity: 200, date: "10 Mar 2025" },
    { receiptNo: "DMS1003", type: "Milk In", quantity: 250, date: "11 Mar 2025" },
    { receiptNo: "DMS1004", type: "Milk Out", quantity: 180, date: "11 Mar 2025" },
    { receiptNo: "DMS1005", type: "Milk In", quantity: 280, date: "12 Mar 2025" },
    { receiptNo: "DMS1006", type: "Milk Out", quantity: 220, date: "12 Mar 2025" },
    { receiptNo: "DMS1007", type: "Milk In", quantity: 260, date: "13 Mar 2025" },
    { receiptNo: "DMS1008", type: "Milk Out", quantity: 210, date: "13 Mar 2025" },
    { receiptNo: "DMS1009", type: "Milk In", quantity: 320, date: "14 Mar 2025" },
    { receiptNo: "DMS1010", type: "Milk Out", quantity: 250, date: "14 Mar 2025" },
  ];

  const filteredTransactions = transactions.filter((txn) =>
    txn.receiptNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      padding: "20px",
      minHeight: "100vh",
      marginTop: "80px",
      backgroundColor: "#f9f9f9",
      color: "#333",
      transition: "0.3s ease-in-out",
    },
    section: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "0.3s ease-in-out",
    },
    searchInput: {
      padding: "10px",
      width: "100%",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
  };

  return (
    <div style={styles.container}>
      {/* Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Dairy Product Services 🥛
        </h1>
      </motion.div>

      {/* Stock Display */}
      <motion.div style={styles.section} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <h2 style={{ fontSize: "20px" }}>Stock Available: {stock} Liters</h2>
      </motion.div>

      {/* Milk In & Out Chart */}
      <motion.div style={styles.section} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Milk In & Out Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={milkData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="day" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
            <Line type="monotone" dataKey="milkIn" stroke="#2E7D32" strokeWidth={2} name="Milk In" />
            <Line type="monotone" dataKey="milkOut" stroke="#D32F2F" strokeWidth={2} name="Milk Out" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Transaction Search & Table */}
      <motion.div style={styles.section} initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Recent Transactions</h2>
        <input
          type="text"
          placeholder="Search by Receipt Number..."
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#eee" }}>Receipt No.</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#eee" }}>Type</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#eee" }}>Quantity (L)</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#eee" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr key={txn.receiptNo}>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>{txn.receiptNo}</td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "10px",
                      fontWeight: "bold",
                      color: txn.type === "Milk In" ? "#2E7D32" : "#D32F2F",
                    }}
                  >
                    {txn.type}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>{txn.quantity}</td>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>{txn.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "10px", fontWeight: "bold" }}>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default Services;
