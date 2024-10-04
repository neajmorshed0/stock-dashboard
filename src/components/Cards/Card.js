import React from "react";

export default function Card({ children, className }) {
  return (
    <div
      className={`border p-6 bg-white dark:bg-secondary-500 dark:border-secondary-300 border-theme-gray-200 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
