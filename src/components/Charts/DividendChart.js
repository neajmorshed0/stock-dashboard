"use client";

import dynamic from "next/dynamic";
import React from "react";
// import { Chart as ApexCharts } from "react-apexcharts";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DividendChart() {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 10, // Rounded corners for the bars
        dataLabels: {
          position: "top", // Show labels on top of bars
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#94A3B8",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#94A3B8",
          fontSize: "12px",
        },
        formatter: function (val) {
          return `$${val}`; // Display dollar sign
        },
      },
    },
    grid: {
      borderColor: "#E2E8F0",
    },
    fill: {
      colors: ["#465FFF"],
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return `$${val}`;
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Dividend",
      data: [400, 600, 500, 700, 400, 600], // Mock data values for the chart
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="p-4 bg-white rounded-lg shadow">
        <h4 className="mb-4 text-lg font-medium">Dividend</h4>
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}
