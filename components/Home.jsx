export const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "50px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1200px",
          width: "100%",
          background: "rgba(0,0,0,0.6)",
          borderRadius: "20px",
          padding: "50px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "30px",
              color: "#ffcc00",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            EmployEase 
          </h1>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome to Employee Management
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Manage your employee records efficiently. Add, update, track, and
            organize your team with a modern, easy-to-use dashboard.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: "20px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            overflow: "hidden",
          }}
        >
          <img
            src="https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png"
            alt="Team Collaboration"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
