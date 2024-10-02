"use client";
import React, { useState } from "react";
import clsx from "clsx";

export default function CardTab() {
  const [selectedTab, setSelectedTab] = useState(0); // Manage selected tab index

  const tabs = [{ label: "All" }, { label: "Virtual" }, { label: "Physical" }];

  return (
    <div className="flex max-w-full min-w-[320px] gap-1 p-1 rounded-lg h-9 bg-weak-50">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setSelectedTab(index)} // Update selected tab
          className={clsx(
            selectedTab === index
              ? "bg-white text-strong-950 shadow-custom-xs"
              : "bg-transparent text-soft-400",
            "focus:outline-none w-full h-7 text-center transition p-1 text-sm font-medium px-5 rounded-md"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
