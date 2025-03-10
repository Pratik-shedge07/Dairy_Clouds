import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

function Services() {
  const [stock, setStock] = useState(1000); // Updated initial stock
  const [searchTerm, setSearchTerm] = useState("");
  const [milkData, setMilkData] = useState([
    { day: "Mon", milkIn: 300, milkOut: 200 },
    { day: "Tue", milkIn: 250, milkOut: 180 },
    { day: "Wed", milkIn: 280, milkOut: 220 },
    { day: "Thu", milkIn: 260, milkOut: 210 },
    { day: "Fri", milkIn: 320, milkOut: 250 },
  ]);

  const [transactions, setTransactions] = useState([
    { receiptNo: "DMS1001", type: "Milk In", quantity: 300, date: "10 Mar 2025" },
    { receiptNo: "DMS1002", type: "Milk Out", quantity: 200, date: "10 Mar 2025" },
    { receiptNo: "DMS1003", type: "Milk In", quantity: 250, date: "11 Mar 2025" },
    { receiptNo: "DMS1004", type: "Milk Out", quantity: 180, date: "11 Mar 2025" },
    { receiptNo: "DMS1005", type: "Milk In", quantity: 280, date: "12 Mar 2025" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    type: "Milk In",
    quantity: 0,
    date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
  });

  const filteredTransactions = transactions.filter((txn) =>
    txn.receiptNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a new receipt number
    const newReceiptNo = `DMS${transactions.length + 1001}`;

    // Update transactions (keep only the last 5 entries)
    const updatedTransactions = [
      ...transactions,
      {
        receiptNo: newReceiptNo,
        ...newTransaction,
        quantity: parseInt(newTransaction.quantity),
      },
    ].slice(-5); // Keep only the last 5 entries
    setTransactions(updatedTransactions);

    // Update milkData (keep only the last 5 entries)
    const day = new Date().toLocaleDateString("en-US", { weekday: "short" });
    const updatedMilkData = milkData.map((data) => {
      if (data.day === day) {
        return {
          ...data,
          milkIn: newTransaction.type === "Milk In" ? data.milkIn + parseInt(newTransaction.quantity) : data.milkIn,
          milkOut: newTransaction.type === "Milk Out" ? data.milkOut + parseInt(newTransaction.quantity) : data.milkOut,
        };
      }
      return data;
    });
    setMilkData(updatedMilkData.slice(-5)); // Keep only the last 5 entries

    // Update stock
    setStock((prevStock) =>
      newTransaction.type === "Milk In"
        ? prevStock + parseInt(newTransaction.quantity)
        : prevStock - parseInt(newTransaction.quantity)
    );

    // Reset form
    setNewTransaction({
      type: "Milk In",
      quantity: 0,
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    });
  };

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
    formInput: {
      padding: "10px",
      width: "100%",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    formButton: {
      padding: "10px 20px",
      backgroundColor: "#2E7D32",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      fontSize: "16px",
      fontWeight: "bold",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    tableHeader: {
      backgroundColor: "#2E7D32",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
    },
    noTransactions: {
      textAlign: "center",
      padding: "10px",
      fontWeight: "bold",
      color: "#777",
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

      {/* Add Milk In & Out Form */}
      <motion.div style={styles.section} initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Add Milk In/Out</h2>
        <form onSubmit={handleSubmit}>
          <select
            name="type"
            value={newTransaction.type}
            onChange={handleInputChange}
            style={styles.formInput}
          >
            <option value="Milk In">Milk In</option>
            <option value="Milk Out">Milk Out</option>
          </select>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (L)"
            value={newTransaction.quantity}
            onChange={handleInputChange}
            style={styles.formInput}
          />
          <input
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
            style={styles.formInput}
            disabled
          />
          <button type="submit" style={styles.formButton}>
            Add Transaction
          </button>
        </form>
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
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Receipt No.</th>
              <th style={styles.tableHeader}>Type</th>
              <th style={styles.tableHeader}>Quantity (L)</th>
              <th style={styles.tableHeader}>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr key={txn.receiptNo} style={styles.tableRow}>
                  <td style={styles.tableCell}>{txn.receiptNo}</td>
                  <td
                    style={{
                      ...styles.tableCell,
                      fontWeight: "bold",
                      color: txn.type === "Milk In" ? "#2E7D32" : "#D32F2F",
                    }}
                  >
                    {txn.type}
                  </td>
                  <td style={styles.tableCell}>{txn.quantity}</td>
                  <td style={styles.tableCell}>{txn.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.noTransactions}>
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