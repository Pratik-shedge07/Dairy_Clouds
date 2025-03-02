import React from "react";

function About() {
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      

      {/* Main Content */}
      <div style={styles.content}>
        <h2 style={styles.heading}>About Dairy Cloud</h2>
        <p style={styles.description}>
          Dairy Cloud is a modern platform for managing dairy business operations. 
          From milk tracking to sales analytics, we provide an efficient solution to streamline your dairy management.
        </p>

        {/* Features Section */}
        <div style={styles.features}>
          {["📊 Business Insights", "🔒 Secure & Reliable", "🎨 User-Friendly UI"].map((feature, index) => (
            <div key={index} style={styles.featureCard} className="hover-scale">
              <h3>{feature}</h3>
              <p>Track production, earnings, and optimize your dairy operations.</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 style={styles.heading}>Meet the Team</h2>
        <div style={styles.team}>
          {[
            { name: "Yash Yeole", role: "Full Stack Developer", github: "https://github.com/yashyeole09", linkedin: "https://www.linkedin.com/in/yashyeole09/", img: "https://github.com/yashyeole09.png" },
            { name: "Pratik Shedge", role: "UI/UX Designer", github: "https://github.com/Pratik-shedge07", linkedin: "https://www.linkedin.com/in/pratik-shedge07/  ", img: "https://github.com/Pratik-shedge07.png" }
          ].map((member, index) => (
            <div key={index} style={styles.memberCard} className="hover-scale">
              <img src={member.img} alt={member.name} style={styles.profilePic} className="hover-rotate" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div style={styles.links}>
                <a href={member.github} target="_blank" rel="noopener noreferrer" style={styles.link} className="hover-underline">🔗 GitHub</a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link} className="hover-underline">🔗 LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Hover Effects */}
      <style>
        {`
          .hover-scale:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; }
          .hover-rotate:hover { transform: rotate(5deg); transition: transform 0.3s ease-in-out; }
          .hover-underline:hover { text-decoration: underline; transition: text-decoration 0.3s ease-in-out; }
          .hover-brightness:hover { filter: brightness(1.2); transition: filter 0.3s ease-in-out; }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff", // White Background
    color: "#000000", // Black Text
    fontFamily: "'Poppins', sans-serif",
    overflowY: "auto",
  },
  content: {
    paddingTop: "40px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "auto",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "15px",
    color: "#000000",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.3em",
    marginBottom: "30px",
    lineHeight: "1.6",
    color: "#000000",
    padding: "0 20px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
    padding: "0 20px",
  },
  featureCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  },
  team: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },
  memberCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  },
  profilePic: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "4px solid #a67b5b",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginTop: "40px",
  },
};

export default About;
