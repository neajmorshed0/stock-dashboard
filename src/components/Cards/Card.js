import React from "react";

export default function Card({ children, className }) {
  return (
    <div
      className={`border p-6 bg-white border-theme-gray-200 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
