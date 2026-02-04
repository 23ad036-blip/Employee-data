import { useState } from "react";
export const Employe = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun", role: "Developer" },
    { id: 2, name: "Priya", role: "Designer" },
    { id: 3, name: "Harish", role: "Developer" },
    { id: 4, name: "Raja", role: "Designer" },
  ]);
  const [form, setForm] = useState({ name: "", role: "" });
  const [editId, setEditId] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId ? { ...emp, ...form } : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees([
        ...employees,
        { id: employees.length + 1, ...form },
      ]);
    }
    setForm({ name: "", role: "" });
  };
  const handleEdit = (emp) => {
    setForm({ name: emp.name, role: emp.role });
    setEditId(emp.id);
  };
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };
  return (
    <div style={page}>
      <div style={card}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}>
          Employee Mana
        </h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={input}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
            required
            style={input}
          />
          <button type="submit" style={btn}>
            {editId ? "Update" : "Add"}
          </button>
        </form>
        <table style={table}>
          <thead>
            <tr>
              <th style={idCol}>ID</th>
              <th style={nameCol}>Name</th>
              <th style={roleCol}>Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td style={idCol}>{emp.id}</td>
                <td style={nameCol}>{emp.name}</td>
                <td style={roleCol}>{emp.role}</td>
                <td style={actionCol}>
                  <button
                    style={editBtn}
                    onClick={() => handleEdit(emp)}
                  >
                    Edit
                  </button>
                  <button
                    style={deleteBtn}
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:"url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=1400&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "20px",
};
const card = {
  background: "rgba(0,0,0,0.7)", 
  padding: "20px",
  width: "650px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
};
const formStyle = {
  display: "flex",
  gap: "8px",
  marginBottom: "20px",
};
const input = {
  flex: 1,
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
const btn = {
  padding: "8px 14px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};
const table = {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed",
  color: "#fff",
};
const idCol = {
  width: "50px",
  textAlign: "center",
};
const nameCol = {
  width: "150px",
  textAlign: "left",
  paddingLeft: "8px",
};
const roleCol = {
  width: "150px",
  textAlign: "left",
  paddingLeft: "8px",
};

const actionCol = {
  textAlign: "center",
};
const editBtn = {
  marginRight: "6px",
  padding: "4px 8px",
  background: "#22c55e",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};
const deleteBtn = {
  padding: "4px 8px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};
