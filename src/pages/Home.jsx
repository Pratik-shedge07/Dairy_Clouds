import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h2>Welcome to Dairy Cloud</h2>
      <p>Manage your dairy business efficiently.</p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" }
};

export default Home;
