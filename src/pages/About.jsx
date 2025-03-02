import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h2>About Dairy Cloud</h2>
      <p>Dairy Cloud is a platform for managing dairy business operations.</p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" }
};

export default About;
