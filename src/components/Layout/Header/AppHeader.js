"use client";
import React, { useState, useEffect } from "react";
export default function AppHeader({ onClick }) {
  const [darkTheme, setDarkTheme] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // Set the theme based on localStorage value
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkTheme(true);
      x;
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
    <header className="sticky top-0 px-6 py-4 bg-white border-b border-theme-gray-200">
      <div className="flex justify-between">
        {/* Search And Toggle Button */}
        <div className="flex gap-4">
          <div>
            <button
              onClick={onClick}
              className="p-3 border rounded-lg size-11 border-theme-gray-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.58334 5C2.58334 4.58579 2.91913 4.25 3.33334 4.25H16.6667C17.0809 4.25 17.4167 4.58579 17.4167 5C17.4167 5.41421 17.0809 5.75 16.6667 5.75L3.33334 5.75C2.91913 5.75 2.58334 5.41422 2.58334 5ZM2.58334 15C2.58334 14.5858 2.91913 14.25 3.33334 14.25L16.6667 14.25C17.0809 14.25 17.4167 14.5858 17.4167 15C17.4167 15.4142 17.0809 15.75 16.6667 15.75L3.33334 15.75C2.91913 15.75 2.58334 15.4142 2.58334 15ZM3.33334 9.25C2.91913 9.25 2.58334 9.58579 2.58334 10C2.58334 10.4142 2.91913 10.75 3.33334 10.75L10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25L3.33334 9.25Z"
                  fill="#667085"
                />
              </svg>
            </button>
          </div>
          <div className="relative w-full hidden sm:block sm:w-[430px] ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-soft-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04184 9.37381C3.04184 5.87712 5.8772 3.04218 9.37517 3.04218C12.8731 3.04218 15.7085 5.87712 15.7085 9.37381C15.7085 12.8705 12.8731 15.7055 9.37517 15.7055C5.8772 15.7055 3.04184 12.8705 3.04184 9.37381ZM9.37517 1.54218C5.04911 1.54218 1.54184 5.04835 1.54184 9.37381C1.54184 13.6993 5.04911 17.2055 9.37517 17.2055C11.2675 17.2055 13.0031 16.5346 14.357 15.4178L17.1771 18.2381C17.47 18.531 17.9449 18.5311 18.2378 18.2382C18.5307 17.9453 18.5307 17.4704 18.2378 17.1775L15.4181 14.3575C16.5365 13.0035 17.2085 11.2671 17.2085 9.37381C17.2085 5.04835 13.7012 1.54218 9.37517 1.54218Z"
                  fill="#667085"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-10 border rounded-lg placeholder:text-sm placeholder:text-secondary-200 h-11 border-theme-gray-200"
              placeholder="Search or type command..."
            />
            <div className="absolute border h-7 rounded-lg border-theme-gray-200 inset-y-1/2 -translate-y-1/2   right-2.5 flex items-center px-2 py-1 text-xs font-normal text-secondary-200 pointer-events-none text-soft-400">
              ⌘K
            </div>
          </div>
        </div>
        {/* Notification And Others */}
        <div className="flex items-center gap-4 ">
          <div className="flex gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center border rounded-full cursor-pointer border-theme-gray-200 size-11"
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
            <div className="relative">
              <button
                onClick={toggleNotification}
                className="relative inline-flex items-center justify-center border rounded-full border-theme-gray-200 size-11"
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
                <ul className="absolute right-0 flex flex-col w-56 min-w-full py-1 mt-4 transition duration-100 ease-out origin-top-right bg-white border rounded border-theme-gray-200 shadow-custom-xs">
                  <li>
                    <button
                      onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                      className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
                    >
                      My Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                      className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
                    >
                      My Contact
                    </button>
                  </li>{" "}
                  <li>
                    <button
                      onClick={() => setIsOpen(!isNotificationOpen)}
                      className="w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500"
                    >
                      Account Settings
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
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
        </div>
      </div>
    </header>
  );
}
