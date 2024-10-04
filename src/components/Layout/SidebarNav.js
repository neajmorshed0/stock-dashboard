"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(true); // Track the submenu state
  let pathname = usePathname();

  // Function to handle the submenu toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => path === pathname;
  // Define the menu items object
  const menuItems = [
    {
      title: "Stocks UI",
      path: "/",
      isNew: true,
    },
    {
      title: "Demo With API",
      path: "/demo",
      isNew: false,
    },
  ];

  return (
    <nav className="pt-4">
      <ul>
        <li>
          <button
            className="flex items-center w-full gap-3 px-3 py-2 text-sm font-medium transition rounded-lg text-secondary-200 dark:hover:bg-gray-950 dark:text-gray-300 hover:bg-primary-100"
            onClick={handleToggle}
          >
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
                d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z"
                fill="currentColor"
              />
            </svg>
            Dashboard
            <svg
              className={`ml-auto duration-200 transition-transform ${
                isOpen ? "rotate-0" : "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 12.7083L10.625 7.5L5.41668 12.7083"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Submenu */}
          {isOpen && (
            <ul className="mt-1 ml-9">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center justify-between p-3 text-sm font-medium rounded-lg ${
                      isActive(item.path)
                        ? "text-primary-500 dark:bg-gray-950 bg-primary-100"
                        : "dark:text-gray-300 text-secondary-200"
                    }`}
                  >
                    {item.title}
                    {item.isNew && (
                      <span className="text-xs uppercase text-primary-500">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
