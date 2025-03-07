import React, { useEffect, useState } from "react";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200); // Delay to make the effect smoother
  }, []);

  return (
    <div style={styles.container} className={`page-fade-in ${animate ? "active" : ""}`}>
      <div style={styles.content}>
        <h2 style={styles.heading} className={`fade-in ${animate ? "active" : ""}`}>About Dairy Cloud</h2>
        <p style={styles.description} className={`fade-in ${animate ? "active" : ""}`}>
          Dairy Cloud is a modern platform for managing dairy business operations. 
          From milk tracking to sales analytics, we provide an efficient solution to streamline your dairy management.
        </p>

        {/* Features Section */}
        <div style={styles.features} className={`fade-in ${animate ? "active" : ""}`}>
          {["📊 Business Insights", "🔒 Secure & Reliable", "🎨 User-Friendly UI"].map((feature, index) => (
            <div key={index} style={styles.featureCard} className="hover-card">
              <h3>{feature}</h3>
              <p>Track production, earnings, and optimize your dairy operations.</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 style={styles.heading} className={`fade-in ${animate ? "active" : ""}`}>Meet the Team</h2>
        <div style={styles.team}>
          {[
            { name: "Yash Yeole", role: "Full Stack Developer", github: "https://github.com/yashyeole09", linkedin: "https://www.linkedin.com/in/yashyeole09/", img: "https://github.com/yashyeole09.png" },
            { name: "Pratik Shedge", role: "UI/UX Designer", github: "https://github.com/Pratik-shedge07", linkedin: "https://www.linkedin.com/in/pratik-shedge07/", img: "https://github.com/Pratik-shedge07.png" }
          ].map((member, index) => (
            <div key={index} style={styles.memberCard} className={`hover-lift slide-in ${animate ? "active" : ""}`}>
              <img src={member.img} alt={member.name} style={styles.profilePic} />
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

      {/* Hover & Animation Effects */}
      <style>
        {`
          /* Page fade-in animation */
          .page-fade-in {
            opacity: 0;
            transform: scale(0.98);
            transition: opacity 1s ease-in-out, transform 1s ease-in-out;
          }

          .page-fade-in.active {
            opacity: 1;
            transform: scale(1);
          }

          .hover-card:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
          }

          .hover-lift:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease-in-out;
          }

          .hover-underline:hover {
            text-decoration: underline;
            transition: text-decoration 0.3s ease-in-out;
          }

          /* Fade-in animation for sections */
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
          }

          .fade-in.active {
            opacity: 1;
            transform: translateY(0);
          }

          /* Slide-in animation for team members */
          .slide-in {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 1s ease-in-out, transform 1s ease-in-out;
          }

          .slide-in.active {
            opacity: 1;
            transform: translateX(0);
          }

          @media (max-width: 768px) {
            .content {
              padding: 20px;
            }
            .team {
              flex-direction: column;
            }
            .featureCard {
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",  // Light gray background
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

export default About;
