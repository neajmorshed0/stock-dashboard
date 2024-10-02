"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StockTest() {
  const [dates, setDates] = useState([]);

  // Mimic the `dataSeries` array for orders (mock data for now)
  const dataSeries = [
    [],
    Array(120)
      .fill()
      .map(() => ({ value: Math.floor(Math.random() * 1000000) })),
  ];

  useEffect(() => {
    const generateDates = () => {
      let ts2 = new Date().getTime();
      const newDates = [];

      for (let i = 0; i < 120; i++) {
        ts2 += 86400000; // Add a day in milliseconds
        const innerArr = [ts2, dataSeries[1][i].value];
        newDates.push(innerArr);
      }

      setDates(newDates);
    };

    generateDates();
  }, []);

  const chartOptions = {
    chart: {
      type: "area",
      fontFamily: "Inter",
      offsetX: -26,
      stacked: false,
      height: 390,
      width: "102%",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Number of orders",
        data: dates,
      },
    ],
    colors: ["#4c51bf"], // Customize colors as needed (Tailwind indigo-600 equivalent)
    stroke: {
      colors: ["#4c51bf"],
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.7,
        opacityTo: 0,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  };

  return (
    <div id="sales">
      {dates.length > 0 && (
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height={390}
        />
      )}
    </div>
  );
}
