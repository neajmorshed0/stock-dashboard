"use client";
import { useState } from "react";
import Link from "next/link";
import AppHeader from "./Header/AppHeader";
import MobileHeader from "./Header/MobileHeader";
import SidebarNav from "./SidebarNav";
import MobileSidebar from "./MobileSidebar";

export default function AppLayout({ children }) {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const handleDesktopSidebar = () => {
    setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
  };
  return (
    <div className="min-h-screen xl:flex">
      <aside
        className={`fixed xl:block  ${
          isDesktopSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } left-0 
         bg-white xl:w-[290px] hidden border-r border-theme-gray-200`}
      >
        <div className="flex flex-col justify-between min-h-screen px-5 pt-8 pb-5">
          {/* Top */}
          <div className="">
            <Link href="/">
              <img src="/images/logo/logo-black.svg" alt="" />
            </Link>
          </div>
          {/* Menu */}
          <div className="flex-1 pt-7">
            <div className="">
              <span className="text-xs uppercase text-theme-gray-400">
                Main
              </span>
              <SidebarNav />
            </div>
          </div>
          {/* Bottom */}
          <div className="px-4 py-5 text-center bg-theme-gray-300 rounded-2xl">
            <h4 className="mb-2 text-base font-semibold left-6 text-secondary-500">
              TailAdmin Pro
            </h4>
            <p className="mb-4 text-sm font-normal leading-5 text-secondary-200">
              Get all dashboard and 300+ essential UI elements
            </p>
            <Link
              href="/"
              className="flex items-center py-3.5 px-6 justify-center text-sm font-medium text-white rounded-lg bg-primary-500 w-full"
            >
              Upgrade Plan
            </Link>
          </div>
        </div>
      </aside>
      <MobileSidebar />
      <div
        className={`flex-1 ${
          isDesktopSidebarOpen ? "xl:ml-[290px]" : ""
        }  bg-theme-gray-300 dark:bg-gray-900`}
      >
        <AppHeader onClick={handleDesktopSidebar} />
        <MobileHeader />
        <main className="min-h-screen p-6">{children}</main>
      </div>
    </div>
  );
}
