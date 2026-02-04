import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        padding: "50px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "900px",
          width: "100%",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "row",
          gap: "40px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#555",
            }}
          >
            Have questions or need support? Reach out to us anytime. We’d love
            to hear from you!
          </p>

          <ul style={{ listStyle: "none", padding: 0, color: "#444" }}>
            <li style={{ marginBottom: "15px" }}>
              📍 <strong>Address:</strong> EmployEase , South Street, Chennai, India
            </li>
            <li style={{ marginBottom: "15px" }}>
              📞 <strong>Phone:</strong> +91 6474888321
            </li>
            <li style={{ marginBottom: "15px" }}>
              📧 <strong>Email:</strong> EmployEase@company.com
            </li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "14px",
                fontSize: "18px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                backgroundColor: "#667eea",
                color: "#fff",
                fontWeight: "bold",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#764ba2")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#667eea")
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
