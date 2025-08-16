import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 25, 20, 18, 24, 27, 23],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Weekly Temperature Trend" }
    },
    scales: {
      y: {
        suggestedMin: 15,
        suggestedMax: 30,
        title: { display: true, text: "Temperature (°C)" }
      }
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "30px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Temperature Value Chart</h1>
      <Line data={data} options={options} />
    </div>
  );
}

export default App;
