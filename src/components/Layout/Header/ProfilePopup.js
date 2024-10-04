"use client";
import React, { useState, useRef, useEffect } from "react";

export default function ProfilePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
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
      {/* Button to trigger dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-3 transition hover:bg-weak-50 hover:text-strong-950"
      >
        <img
          src="/images/avatar/avatar-1.png"
          className="rounded-full size-11"
          alt="User Avatar"
        />
        <div className="items-center hidden gap-1 lg:flex">
          <span className="text-sm font-medium dark:text-gray-300 text-secondary-300">
            Emirhan Boruch
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3125 6.65625L9 11.3437L13.6875 6.65625"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 flex flex-col w-48 min-w-full py-1 mt-4 transition duration-100 ease-out origin-top-right bg-white border rounded dark:border-gray-700 dark:bg-gray-900 border-theme-gray-200 shadow-custom-xs">
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 text-sm text-left transition dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-secondary-500 dark:text-white"
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 text-sm text-left transition dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-secondary-500 dark:text-white"
            >
              My Contact
            </button>
          </li>{" "}
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
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
