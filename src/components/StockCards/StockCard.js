"use client"; // Enabling client-side interactions
import { useState, useEffect } from "react";
import Card from "../Cards/Card";

const StockCard = ({ symbol, companyName, logoUrl }) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(`/api/stock?symbol=${symbol}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setStockData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  if (loading) {
    return <div>Loading stock data...</div>;
  }

  if (error) {
    return (
      <div className="dark:text-white text-secondary-300">
        Error loading stock data./ API rate limit is 25 requests per day.
      </div>
    );
  }

  const price = stockData["05. price"];
  const changePercent = stockData["10. change percent"];

  return (
    <Card>
      <div className="flex items-center gap-3">
        <img
          src={logoUrl}
          className="rounded-full size-10"
          alt={`${companyName} logo`}
        />
        <div>
          <h3 className="font-semibold leading-none uppercase dark:text-white text-secondary-500">
            {symbol}
          </h3>
          <span className="text-xs leading-none dark:text-gray-300 text-secondary-200">
            {companyName}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-xl font-semibold dark:text-white text-secondary-500">
          ${parseFloat(price).toFixed(2)}
        </h2>
        <span
          className={`flex items-center h-6 px-2 py-1 text-sm font-medium rounded-full ${
            changePercent.includes("-")
              ? "text-error-500 bg-error-100"
              : "text-success-500 bg-success-100"
          }`}
        >
          <svg
            className="size-3"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={
                changePercent.includes("-")
                  ? "M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
                  : "M6.06462 1.62394C6.20193 1.47073 6.40135 1.37433 6.62329 1.37433C6.6236 1.37433 6.62391 1.37433 6.62422 1.37433C6.81631 1.37416 7.00845 1.44732 7.15505 1.59381L10.1551 4.59181C10.4481 4.8846 10.4483 5.35947 10.1555 5.65247C9.86273 5.94546 9.38785 5.94563 9.09486 5.65284L7.37329 3.93248L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93579L4.15516 5.65282C3.86218 5.94562 3.3873 5.94547 3.0945 5.65249C2.8017 5.3595 2.80185 4.88463 3.09484 4.59183L6.06462 1.62394Z"
              }
              fill="currentColor"
            />
          </svg>
          {changePercent}
        </span>
      </div>
    </Card>
  );
};

export default StockCard;
