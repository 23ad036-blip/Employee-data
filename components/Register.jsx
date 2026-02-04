import { useState } from "react";

export const Register = () => {
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!empName || !empId || !designation || !salary) {
      alert("Please fill all fields 😅");
      return;
    }

    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = {
        empName,
        empId,
        designation,
        salary,
      };
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, { empName, empId, designation, salary }]);
    }

    clearForm();
  };

  const clearForm = () => {
    setEmpName("");
    setEmpId("");
    setDesignation("");
    setSalary("");
  };

  const editEmployee = (index) => {
    const emp = employees[index];
    setEmpName(emp.empName);
    setEmpId(emp.empId);
    setDesignation(emp.designation);
    setSalary(emp.salary);
    setEditIndex(index);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div style={container}>
      <div style={{ width: "100%", maxWidth: "1100px" }}>
        <h2 style={title}>Employee Registration 👨‍💼</h2>

        {/* Form + Image */}
        <div style={cardFlex}>
          {/* Left - Form */}
          <div style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} style={formGrid}>
              <input
                type="text"
                placeholder="Employee Name"
                value={empName}
                onChange={(e) => setEmpName(e.target.value)}
                style={inputStyle}
              />

              <input
                type="number"
                placeholder="Employee ID"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                style={inputStyle}
              />

              <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                style={inputStyle}
              />

              <button type="submit" style={buttonStyle}>
                {editIndex !== null ? "Update Employee 🔁" : "Add Employee ➕"}
              </button>
            </form>
          </div>

          {/* Right - Image */}
          <div style={imageBox}>
            <img
              src="https://cdn.pixabay.com/photo/2019/10/02/04/40/registration-4519979_1280.jpg"
              alt="Registration Illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>

        {/* Table */}
        {employees.length > 0 && (
          <div style={{ ...cardStyle, marginTop: "30px" }}>
            <h3>Employee List</h3>

            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Designation</th>
                  <th style={thStyle}>Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{emp.empName}</td>
                    <td style={tdStyle}>{emp.empId}</td>
                    <td style={tdStyle}>{emp.designation}</td>
                    <td style={tdStyle}>₹{emp.salary}</td>
                    <td style={tdStyle}>
                      <button
                        style={editBtn}
                        onClick={() => editEmployee(index)}
                      >
                        Edit ✏️
                      </button>
                      <button
                        style={deleteBtn}
                        onClick={() => deleteEmployee(index)}
                      >
                        Delete 🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

/* 🎨 Styles */

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  padding: "40px",
  display: "flex",
  justifyContent: "center",
};

const title = {
  textAlign: "center",
  color: "#fff",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const cardFlex = {
  display: "flex",
  gap: "30px",
  background: "#fff",
  borderRadius: "16px",
  padding: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  gridColumn: "span 2",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "12px",
  textAlign: "center",
  backgroundColor: "#f4f4f4",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "12px",
  textAlign: "center",
};

const editBtn = {
  padding: "6px 10px",
  marginRight: "8px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#3498db",
  color: "#fff",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "6px 10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#e74c3c",
  color: "#fff",
  cursor: "pointer",
};

const imageBox = {
  flex: 1,
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
