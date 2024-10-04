"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(`/api/stock?symbol=${symbol}`);
        const data = await response.json();

        if (response.ok && data["05. price"]) {
          // Format the data for ApexCharts
          const formattedData = [
            {
              x: new Date(),
              y: parseFloat(data["05. price"]),
            },
          ];
          setChartData(formattedData);
        } else {
          setError(data.error || "Failed to fetch data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  const chartOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "MMM dd",
      },
    },
    yaxis: {
      title: {
        text: "Price (USD)",
      },
    },
    title: {
      text: `Stock Price for ${symbol}`,
      align: "left",
    },
  };

  const series = [
    {
      name: "Current Price",
      data: chartData,
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={series} type="area" height={350} />
    </div>
  );
};

export default StockChart;
