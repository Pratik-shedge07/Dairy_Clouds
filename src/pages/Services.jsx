import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

function Services() {
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

  // Calculate the current stock based on transactions
  const calculateStock = () => {
    let initialStock = 1000; // Initial stock
    return transactions.reduce((stock, txn) => {
      if (txn.type === "Milk In") {
        return stock + txn.quantity;
      } else if (txn.type === "Milk Out") {
        return stock - txn.quantity;
      }
      return stock;
    }, initialStock);
  };

  const currentStock = calculateStock();

  const filteredTransactions = transactions.filter((txn) =>
    txn.receiptNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate quantity input
    if (newTransaction.quantity <= 0) {
      alert("Quantity must be a positive number.");
      return;
    }

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

    // Update milkData
    const day = new Date().toLocaleDateString("en-US", { weekday: "short" });
    const existingDayData = milkData.find((data) => data.day === day);

    if (existingDayData) {
      const updatedMilkData = milkData.map((data) => {
        if (data.day === day) {
          return {
            ...data,
            milkIn:
              newTransaction.type === "Milk In"
                ? data.milkIn + parseInt(newTransaction.quantity)
                : data.milkIn,
            milkOut:
              newTransaction.type === "Milk Out"
                ? data.milkOut + parseInt(newTransaction.quantity)
                : data.milkOut,
          };
        }
        return data;
      });
      setMilkData(updatedMilkData);
    } else {
      setMilkData([
        ...milkData,
        {
          day,
          milkIn: newTransaction.type === "Milk In" ? parseInt(newTransaction.quantity) : 0,
          milkOut: newTransaction.type === "Milk Out" ? parseInt(newTransaction.quantity) : 0,
        },
      ]);
    }

    // Reset form
    setNewTransaction({
      type: "Milk In",
      quantity: 0,
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    });
  };

  const handleDeleteTransaction = (receiptNo) => {
    const transactionToDelete = transactions.find((txn) => txn.receiptNo === receiptNo);
    if (!transactionToDelete) return;

    // Update milkData
    const day = new Date(transactionToDelete.date).toLocaleDateString("en-US", { weekday: "short" });
    const updatedMilkData = milkData.map((data) => {
      if (data.day === day) {
        return {
          ...data,
          milkIn:
            transactionToDelete.type === "Milk In"
              ? data.milkIn - transactionToDelete.quantity
              : data.milkIn,
          milkOut:
            transactionToDelete.type === "Milk Out"
              ? data.milkOut - transactionToDelete.quantity
              : data.milkOut,
        };
      }
      return data;
    });
    setMilkData(updatedMilkData);

    // Update transactions
    const updatedTransactions = transactions.filter((txn) => txn.receiptNo !== receiptNo);
    setTransactions(updatedTransactions);
  };

  const handleRemoveAllTransactions = () => {
    setTransactions([]);
    setMilkData([
      { day: "Mon", milkIn: 0, milkOut: 0 },
      { day: "Tue", milkIn: 0, milkOut: 0 },
      { day: "Wed", milkIn: 0, milkOut: 0 },
      { day: "Thu", milkIn: 0, milkOut: 0 },
      { day: "Fri", milkIn: 0, milkOut: 0 },
    ]);
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
    deleteButton: {
      backgroundColor: "#D32F2F",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "5px 10px",
      cursor: "pointer",
    },
    removeAllButton: {
      backgroundColor: "#D32F2F",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
      marginBottom: "10px",
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
        <h2 style={{ fontSize: "20px" }}>Stock Available: {currentStock} Liters</h2>
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
            min="1"
            required
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
        <button onClick={handleRemoveAllTransactions} style={styles.removeAllButton}>
          Remove All Transactions
        </button>
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
              <th style={styles.tableHeader}>Action</th>
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
                  <td style={styles.tableCell}>
                    <button onClick={() => handleDeleteTransaction(txn.receiptNo)} style={styles.deleteButton}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={styles.noTransactions}>
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