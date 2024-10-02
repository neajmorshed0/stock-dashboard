"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StockPortfolioCh() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Portfolio Value",
        data: [
          5000, 7000, 6000, 9000, 11000, 8000, 14000, 17000, 15000, 18000,
          19000, 21000,
        ],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value / 1000}K`,
        },
      },
    },
  };
  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Portfolio Performance</h2>
          <p className="text-sm text-gray-500">
            Here is your performance stats of each month
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-blue-500 bg-blue-100 rounded-lg">
            Monthly
          </button>
          <button className="px-3 py-1 text-gray-500 rounded-lg">
            Quarterly
          </button>
          <button className="px-3 py-1 text-gray-500 rounded-lg">
            Annually
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
