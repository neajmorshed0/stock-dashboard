"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Card from "../Cards/Card";

// Dynamically import ApexCharts to avoid SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StockPortfolioApex() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");

  // Chart data for different timeframes
  const timeframes = {
    Monthly: {
      categories: [
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
      data: [
        5000, 7000, 6000, 9000, 11000, 8000, 14000, 17000, 15000, 18000, 19000,
        21000,
      ],
    },
    Quarterly: {
      categories: ["Q1", "Q2", "Q3", "Q4"],
      data: [18000, 32000, 37000, 58000],
    },
    Annually: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
      data: [45000, 55000, 70000, 80000, 95000, 110000],
    },
  };

  const chartOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      fontFamily: "Outfit, sans-serif",
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#465FFF"], // Main line color (Tailwind blue-500)
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: timeframes[selectedTimeframe].categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#344054",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value / 1000}K`,
        style: {
          colors: "#344054",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "#F2F4F7",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Portfolio Value",
      data: timeframes[selectedTimeframe].data,
    },
  ];

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <Card className="w-full bg-white">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-secondary-500">
            Portfolio Performance
          </h2>
          <p className="text-sm text-secondary-200">
            Here is your performance stats of each month
          </p>
        </div>
        <div className="flex p-0.5 space-x-2 rounded-lg bg-theme-gray-500">
          {["Monthly", "Quarterly", "Annually"].map((timeframe) => (
            <button
              key={timeframe}
              className={`px-3 py-2.5 text-sm font-medium rounded-md ${
                selectedTimeframe === timeframe
                  ? "bg-white text-secondary-500"
                  : "bg-transparent text-secondary-200"
              }`}
              onClick={() => handleTimeframeClick(timeframe)}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
      <div>
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={350}
        />
      </div>
    </Card>
  );
}
