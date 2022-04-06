import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = (props) => {
  const [covidData, setcovidData] = useState("");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Covid Cases based on States",
      },
    },
  };

  const labels = covidData
    ? covidData.map((item) => {
        return item.state_name;
      })
    : null;

  const data = {
    labels,
    datasets: [
      {
        label: "No. of covid cases",
        data: covidData ? covidData.map((item) => item.positive) : "null",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
      },
    ],
  };
  useEffect(() => {
    setcovidData(props.data.slice(0, -1));
  }, [props.data]);
  return (
    <div>
      <Bar options={options} data={data} height={400} width={600}></Bar>
    </div>
  );
};

export default Charts;
