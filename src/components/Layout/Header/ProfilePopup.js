"use client";
import React, { useState } from "react";

export default function ProfilePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
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
          <span className="text-sm font-medium text-secondary-300">
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
        <ul className="absolute right-0 flex flex-col w-48 min-w-full py-1 mt-4 transition duration-100 ease-out origin-top-right bg-white border rounded border-theme-gray-200 shadow-custom-xs">
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
            >
              My Contact
            </button>
          </li>{" "}
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
            >
              Account Settings
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
