import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { dataList } from "../assets/Data";

export default function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   }
  // }, [navigate]);
const filteredData = dataList.filter(
  (data) => data.energy_savings.savings_percent > 0
);

console.log(filteredData);


  const chartData = {
    labels: filteredData.map((data) => {
      let date = new Date(data.createdAt.$date);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: "Energy Saving Mode ON",
        data: filteredData.map((data) => data.total_kwh), // Data for "ON"
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color
      },
      {
        label: "Energy Saving Mode OFF",
        data: filteredData.map((data) => data.energy_savings.savings_percent), // Data for "OFF"
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Light purple color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Place legend at the top
      },
    },
    scales: {
      x: {
        stacked: true, // Stack the bars on the x-axis
      },
      y: {
        stacked: true, // Stack the bars on the y-axis
        beginAtZero: true,
        title: {
          display: true,
          text: "Energy Consumed (kWh)", // Y-axis label
        },
      },
    },
  };

  return (
    <div className="App">
      <h3>Energy Consumption Chart</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
}
