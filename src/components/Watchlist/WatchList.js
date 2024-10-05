"use client";
import React, { Fragment, useEffect, useState } from "react";
import Card from "../Cards/Card";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { companies } from "@/utils/data";

export default function WatchList() {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = {};
        for (const company of companies) {
          const response = await fetch(`/api/stock?symbol=${company.symbol}`);
          if (!response.ok) throw new Error("Failed to fetch");
          const result = await response.json();
          data[company.symbol] = result;
        }
        setStockData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <div>Loading stock data...</div>;
  }

  if (error) {
    return (
      <div className="text-secondary-300 dark:text-white">
        Error loading stock data./ Our standard API rate limit is 25 requests
        per day.
      </div>
    );
  }
  return (
    <Card>
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-lg font-semibold text-secondary-500">
          My Watchlist
        </h2>
        <div className="relative">
          <Menu>
            <MenuButton className="p-1 transition rounded-full hover:bg-weak-50 hover:text-strong-950">
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
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                anchor="left"
                transition
                className="flex flex-col w-32 py-1 mt-6 ml-2 transition duration-100 ease-out origin-top-right bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-700 border-soft-200 shadow-custom-xs"
              >
                <MenuItem>
                  <button className="px-2 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500 dark:text-white dark:hover:bg-gray-800">
                    Edit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="px-2 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500 dark:text-white dark:hover:bg-gray-800">
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
      <ul className="divide-y divide-theme-gray-200 h-[348px] overflow-y-auto mt-4 scrollbar scrollbar-thumb-theme-gray-200  scrollbar-track-secondary-500">
        {companies.map((company) => {
          const data = stockData[company.symbol];
          if (!data) return null;

          const price = data["05. price"];
          const changePercent = data["10. change percent"];

          return (
            <li
              key={company.symbol}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="grow">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={company.logoUrl}
                      className="rounded-full size-10"
                      alt={`${company.companyName} logo`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-none uppercase dark:text-white text-secondary-500">
                      {company.symbol}
                    </h3>
                    <span className="text-xs leading-none dark:text-secondary-300 text-secondary-200">
                      {company.companyName}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold dark:text-white text-secondary-500">
                  ${parseFloat(price).toFixed(2)}
                </h4>
                <span
                  className={`flex items-center justify-end h-6 text-xs font-medium  ${
                    changePercent.includes("-")
                      ? "text-error-500"
                      : "text-success-500"
                  }`}
                >
                  {parseFloat(changePercent).toFixed(2)}%
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
