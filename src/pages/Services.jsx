import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function Services() {
  const milkData = [
    { day: "Mon", milkIn: 200, milkOut: 150 },
    { day: "Tue", milkIn: 180, milkOut: 130 },
    { day: "Wed", milkIn: 220, milkOut: 170 },
    { day: "Thu", milkIn: 210, milkOut: 160 },
    { day: "Fri", milkIn: 250, milkOut: 190 },
  ];

  const [stock, setStock] = useState(500); // Initial stock

  const transactions = [
    { id: 1, type: "Milk In", quantity: 200, date: "10 Mar 2025" },
    { id: 2, type: "Milk Out", quantity: 150, date: "10 Mar 2025" },
    { id: 3, type: "Milk In", quantity: 180, date: "11 Mar 2025" },
    { id: 4, type: "Milk Out", quantity: 130, date: "11 Mar 2025" },
  ];

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      color: "#333",
      minHeight: "100vh",
      marginTop: "80px", // Push content down (adjust this if needed)
    },
    section: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "10px",
      backgroundColor: "#eee",
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "center",
    },
    milkIn: { color: "#2E7D32", fontWeight: "bold" },
    milkOut: { color: "#D32F2F", fontWeight: "bold" },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Dairy Product Services 🥛
      </h1>

      {/* Stock Display */}
      <div style={styles.section}>
        <h2 style={{ fontSize: "20px" }}>Stock Available: {stock} Liters</h2>
      </div>

      {/* Milk In & Out Chart */}
      <div style={styles.section}>
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
      </div>

      {/* Transaction History Table */}
      <div style={styles.section}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Recent Transactions</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Quantity (L)</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td style={styles.td}>{txn.id}</td>
                <td style={{ ...styles.td, ...(txn.type === "Milk In" ? styles.milkIn : styles.milkOut) }}>
                  {txn.type}
                </td>
                <td style={styles.td}>{txn.quantity}</td>
                <td style={styles.td}>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
