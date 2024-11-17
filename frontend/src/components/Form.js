import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    accessTime: "",
    accessDate: "",
    employeeName: "",
    algoStatus: 0, // Default to Energy Saving Mode ON
  });

  const [chartData, setChartData] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hit the API to fetch filtered data
      const response = await axios.post("http://localhost:5000/api/filter-chart-data", formData);
      const data = response.data;

      // Format chart data
      const labels = data.map((item) => {
        const date = new Date(item.createdAt.$date);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      });

      const kwhData = data.map((item) => item.total_kwh);

      setChartData({
        labels,
        datasets: [
          {
            label: formData.algoStatus === 1 ? "Energy Saving Mode ON" : "Energy Saving Mode OFF",
            data: kwhData,
            backgroundColor:
              formData.algoStatus === 1
                ? "rgba(54, 162, 235, 0.8)" // Blue
                : "rgba(153, 102, 255, 0.6)", // Purple
          },
        ],
      });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Filter Chart Data
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Access Time:
          </label>
          <input
            type="time"
            name="accessTime"
            value={formData.accessTime}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Access Date:
          </label>
          <input
            type="date"
            name="accessDate"
            value={formData.accessDate}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Employee Name:
          </label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Filter:
          </label>
          <select
            name="algoStatus"
            value={formData.algoStatus}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
              backgroundColor: "#fff",
            }}
          >
            <option value={1}>Energy Saving Mode ON</option>
            <option value={0}>Energy Saving Mode OFF</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Chart */}
      {chartData ? (
        <div style={{ marginTop: "20px" }}>
          <Bar data={chartData} />
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#777" }}>
          No chart data available. Please filter and submit.
        </p>
      )}
    </div>
  );
};
