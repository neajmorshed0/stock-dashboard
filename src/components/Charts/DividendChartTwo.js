import React from "react";
import ReactApexChart from "react-apexcharts";
import Card from "../Cards/Card";

const DividendChartTwo = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "Outfit, sans-serif",
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 800,
      tickAmount: 4,
      labels: {
        formatter: (value) => `$${value}`,
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
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
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    colors: ["#F2F4F7", "#F2F4F7", "#465FFF", "#F2F4F7", "#F2F4F7", "#F2F4F7"],
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Dividend",
      data: [500, 700, 450, 650, 400, 700],
    },
  ];

  return (
    <Card className="w-full bg-white">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-lg font-semibold text-secondary-500">Dividend</h2>
        <div>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
                fill="#98A2B3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={310}
          className="-ml-4"
        />
      </div>
    </Card>
  );
};

export default DividendChartTwo;
