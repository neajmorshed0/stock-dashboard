"use client";
import React, { useState, useRef, useEffect } from "react";

export default function NotificationPopup() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsNotificationOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleNotification}
        className="relative inline-flex items-center justify-center border rounded-full dark:border-secondary-300 border-theme-gray-200 size-11"
      >
        <svg
          className="size-5"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.2923C10.75 1.87808 10.4142 1.5423 10 1.5423C9.5858 1.5423 9.25001 1.87808 9.25001 2.2923V2.83595C6.08263 3.20715 3.62501 5.90022 3.62501 9.1673V14.459H3.33334C2.91913 14.459 2.58334 14.7948 2.58334 15.209C2.58334 15.6232 2.91913 15.959 3.33334 15.959H4.37501H15.625H16.6667C17.0809 15.959 17.4167 15.6232 17.4167 15.209C17.4167 14.7948 17.0809 14.459 16.6667 14.459H16.375V9.1673C16.375 5.90022 13.9174 3.20715 10.75 2.83595V2.2923ZM14.875 14.459V9.1673C14.875 6.47491 12.6924 4.2923 10 4.2923C7.30762 4.2923 5.12501 6.47491 5.12501 9.1673V14.459H14.875ZM8.00001 17.7084C8.00001 18.1226 8.3358 18.4584 8.75001 18.4584H11.25C11.6642 18.4584 12 18.1226 12 17.7084C12 17.2941 11.6642 16.9584 11.25 16.9584H8.75001C8.3358 16.9584 8.00001 17.2941 8.00001 17.7084Z"
            fill="#667085"
          />
        </svg>
        <span className="absolute top-0 right-0.5 block border-white rounded-full bg-theme-orange-500 size-2"></span>
      </button>
      {/* Dropdown Menu */}
      {isNotificationOpen && (
        <ul className="absolute right-0 flex flex-col w-56 min-w-full py-1 mt-4 transition duration-100 ease-out origin-top-right bg-white border rounded dark:border-gray-700 dark:bg-gray-900 border-theme-gray-200 shadow-custom-xs">
          <li>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="w-full px-4 py-2 text-sm text-left transition dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-secondary-500 dark:text-white"
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="w-full px-4 py-2 text-sm text-left transition dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-secondary-500 dark:text-white"
            >
              My Contact
            </button>
          </li>{" "}
          <li>
            <button
              onClick={() => setIsOpen(!isNotificationOpen)}
              className="w-full px-4 py-2 text-sm text-left transition dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-secondary-500 dark:text-white"
            >
              Account Settings
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
