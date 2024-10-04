"use client";
import React, { useState, useEffect } from "react";

export default function ThemeToggler() {
  const [darkTheme, setDarkTheme] = useState(null);
  // Set the theme based on localStorage value
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkTheme(false); // Set light mode
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update class when state is changed
  useEffect(() => {
    if (darkTheme === null) return;

    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  // To toggle theme
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  //Prevent flickering
  if (darkTheme === null) {
    return null;
  }
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center border rounded-full cursor-pointer dark:border-secondary-300 border-theme-gray-200 size-11"
      >
        {darkTheme ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="4.167"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1.25V3.333"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.667V18.75"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25 10H3.333"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.667 10H18.75"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.6967 4.6967L5.923 5.923"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.077 14.077L15.3033 15.3033"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.077 5.923L15.3033 4.6967"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.6967 15.3033L5.923 14.077"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.24673 7.08494C6.24673 10.7677 9.23223 13.7532 12.915 13.7532C14.6686 13.7532 16.264 13.0764 17.4544 11.9697C16.5839 15.2727 13.5764 17.7083 9.99999 17.7083C5.74279 17.7083 2.29166 14.2572 2.29166 9.99997C2.29166 6.42357 4.72727 3.41604 8.03027 2.54559C6.92358 3.73595 6.24673 5.3314 6.24673 7.08494Z"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
