import Link from "next/link";
import React from "react";

export default function SidebarWidget() {
  return (
    <div className="px-4 py-5 text-center dark:bg-secondary-500 bg-theme-gray-300 rounded-2xl">
      <h4 className="mb-2 text-base font-semibold dark:text-white left-6 text-secondary-500">
        TailAdmin Pro
      </h4>
      <p className="mb-4 text-sm font-normal leading-5 dark:text-gray-300 text-secondary-200">
        Get all dashboard and 300+ essential UI elements
      </p>
      <Link
        href="/"
        className="flex items-center py-3.5 px-6 justify-center text-sm font-medium text-white rounded-lg bg-primary-500 w-full"
      >
        Upgrade Plan
      </Link>
    </div>
  );
}
