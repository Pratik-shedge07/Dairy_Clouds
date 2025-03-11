import React, { useEffect, useState } from "react";

// Reusable FeatureCard Component
const FeatureCard = ({ feature, description, icon }) => (
  <div style={styles.featureCard} className="hover-card">
    <div style={styles.icon}>{icon}</div>
    <h3>{feature}</h3>
    <p>{description}</p>
  </div>
);

// Reusable TeamMemberCard Component
const TeamMemberCard = ({ member }) => (
  <div style={styles.memberCard} className={`hover-lift slide-in`}>
    <img src={member.img} alt={member.name} style={styles.profilePic} />
    <h3>{member.name}</h3>
    <p>{member.role}</p>
    <div style={styles.links}>
      <a href={member.github} target="_blank" rel="noopener noreferrer" style={styles.link} className="hover-underline">
        🔗 GitHub
      </a>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link} className="hover-underline">
        🔗 LinkedIn
      </a>
    </div>
  </div>
);

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { feature: "📊 Business Insights", description: "Track production, earnings, and optimize your dairy operations.", icon: "📈" },
    { feature: "🔒 Secure & Reliable", description: "Your data is safe with our secure and reliable platform.", icon: "🔐" },
    { feature: "🎨 User-Friendly UI", description: "An intuitive interface designed for ease of use.", icon: "🖥️" },
    { feature: "📦 Inventory Management", description: "Keep track of your dairy products effortlessly.", icon: "📦" },
    { feature: "📢 Customer Support", description: "24/7 assistance for your business needs.", icon: "💬" },
    { feature: "⚡ Fast & Efficient", description: "Optimized for quick data processing and ease of access.", icon: "⚡" }
  ];

  const teamMembers = [
    { name: "Yash Yeole", role: "Full Stack Developer", github: "https://github.com/yashyeole09", linkedin: "https://www.linkedin.com/in/yashyeole09/", img: "https://github.com/yashyeole09.png" },
    { name: "Pratik Shedge", role: "UI/UX Designer", github: "https://github.com/Pratik-shedge07", linkedin: "https://www.linkedin.com/in/pratik-shedge07/", img: "https://github.com/Pratik-shedge07.png" },
  ];

  return (
    <div style={styles.container} className={`page-fade-in ${animate ? "active" : ""}`}>
      <div style={styles.content}>
        <h2 style={styles.heading} className={`fade-in ${animate ? "active" : ""}`}>About Dairy Cloud'z</h2>
        <p style={styles.description} className={`fade-in ${animate ? "active" : ""}`}>
          Dairy Cloud'z is a modern platform for managing dairy business operations. From milk tracking to sales analytics, we provide an efficient solution to streamline your dairy management.
        </p>

        <h2 style={styles.heading} className={`fade-in ${animate ? "active" : ""}`}>Key Features</h2>
        <div style={styles.features} className={`fade-in ${animate ? "active" : ""}`}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <h2 style={styles.heading} className={`fade-in ${animate ? "active" : ""}`}>Meet the Team</h2>
        <div style={styles.team}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "'Inter', sans-serif",
    overflowY: "auto",
    padding: "50px 20px",
  },
  content: {
    textAlign: "center",
    maxWidth: "1100px",
    margin: "auto",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#222",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "40px",
    lineHeight: "1.6",
    color: "#555",
    padding: "0 20px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    border: "1px solid #ddd",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  icon: {
    fontSize: "2.5em",
    marginBottom: "10px",
  },
  team: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  memberCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    border: "1px solid #ddd",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "4px solid #ddd",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    margin: "0 10px",
    transition: "color 0.3s",
  },
};

export default React.memo(About);
