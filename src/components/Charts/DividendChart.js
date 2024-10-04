"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DividendChart({ symbol }) {
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);

  useEffect(() => {
    const fetchDividendData = async () => {
      const symbol = "IBM"; // Replace with your stock symbol or pass as a prop
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Use your Alpha Vantage API key
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response Data:", data); // Log for debugging

        const timeSeries = data["Time Series (Daily)"];

        if (!timeSeries) {
          // Handle errors
          if (data["Error Message"]) {
            throw new Error(`API Error: ${data["Error Message"]}`);
          } else if (data["Note"]) {
            throw new Error(`API Rate Limit: ${data["Note"]}`);
          } else {
            throw new Error("Invalid data received from Alpha Vantage");
          }
        }

        // Extract the date and dividend data
        const dividendData = Object.keys(timeSeries).map((date) => {
          const dividendAmount = timeSeries[date]["7. dividend amount"];
          return {
            date,
            dividend: dividendAmount ? parseFloat(dividendAmount) : 0, // Ensure safe parsing
          };
        });

        // Filter to only include entries with non-zero dividends
        const filteredDividendData = dividendData.filter(
          (entry) => entry.dividend > 0
        );

        if (filteredDividendData.length === 0) {
          throw new Error("No dividend data available for this stock.");
        }

        // Prepare data for the chart
        const categories = filteredDividendData.map((entry) => entry.date); // Dates
        const dividends = filteredDividendData.map((entry) => entry.dividend); // Dividend values

        setChartCategories(categories); // X-axis dates
        setChartData(dividends); // Y-axis dividend values
      } catch (error) {
        console.error("Error fetching dividend data:", error.message);
      }
    };

    fetchDividendData();
  }, []);

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
      categories: chartCategories, // Dynamic dates
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
      data: chartData, // Dynamic dividend data
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="p-4 bg-white rounded-lg shadow">
        <h4 className="mb-4 text-lg font-medium">Dividend</h4>
        {chartData.length > 0 ? (
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={300}
          />
        ) : (
          <p>No dividend data available for this stock.</p>
        )}
      </div>
    </div>
  );
}
