"use client";
import React, { useContext } from "react";
import SearchInput from "./SearchInput";
import NotificationPopup from "./NotificationPopup";
import ThemeToggler from "./ThemeToggler";
import ProfilePopup from "./ProfilePopup";
import { SidebarContext } from "@/context/SidebarContext";

export default function MobileHeader() {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <header className="sticky top-0 block px-6 py-4 bg-white border-b xl:hidden border-theme-gray-200">
      <div className="flex justify-between">
        {/* Search And Toggle Button */}
        <div className="flex gap-4">
          <div>
            <button
              onClick={toggleSidebar}
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
          <SearchInput />
        </div>
        {/* Notification And Others */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <ThemeToggler />
            <NotificationPopup />
          </div>
          <ProfilePopup />
        </div>
      </div>
    </header>
  );
}
