import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { dataList } from "../assets/Data";
import Form from "./Form";

export default function Home() {


  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
const filteredData = dataList.filter(
  (data) => data.energy_savings.savings_percent > 0
);


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
        data: filteredData.map((data) => data.total_kwh), 
        backgroundColor: "rgba(54, 162, 235, 0.8)", 
      },
      {
        label: "Energy Saving Mode OFF",
        data: filteredData.map((data) => data.energy_savings.savings_percent), 
        backgroundColor: "rgba(153, 102, 255, 0.6)", 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", 
      },
    },
    scales: {
      x: {
        stacked: true, 
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Energy Consumed (kWh)", 
        },
      },
    },
  };

  return (
    <div className="App">
      <Form/>
      <h3>Energy Consumption Chart</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
}
