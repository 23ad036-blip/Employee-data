import React from "react";

export const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=1200&q=80')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "950px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "25px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          About This Application
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          This <strong>Employee Management Dashboard</strong> is a modern and
          user-friendly web application built using <strong>React</strong>. It
          helps organizations manage employee information efficiently and keep
          everything organized in one place.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.8",
            marginBottom: "35px",
          }}
        >
          Easily add new employees, update their details, track records, and
          maintain a clean, professional database with ease.
        </p>

        <h3
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            borderBottom: "2px solid #ffcc00",
            display: "inline-block",
            paddingBottom: "5px",
          }}
        >
          Company Rules & Regulations
        </h3>

        <ul
          style={{
            textAlign: "left",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto",
            listStyle: "square",
          }}
        >
          <li>Employees must adhere to company policies and code of conduct.</li>
          <li>Maintain punctuality and follow assigned working hours.</li>
          <li>All employee data should be handled confidentially.</li>
          <li>Unauthorized access or misuse of data is strictly prohibited.</li>
          <li>Any updates to employee records must be accurate and verified.</li>
          <li>Respect colleagues and maintain a professional work environment.</li>
        </ul>
      </div>
    </div>
  );
};
