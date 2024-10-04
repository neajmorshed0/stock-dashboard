"use client";
import { useState } from "react";
import Link from "next/link";
import AppHeader from "./Header/AppHeader";
import MobileHeader from "./Header/MobileHeader";
import SidebarNav from "./SidebarNav";
import MobileSidebar from "./MobileSidebar";
import SidebarWidget from "../Widget/SidebarWidget";

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
         bg-white dark:bg-gray-900 dark:border-secondary-300 xl:w-[290px] hidden border-r border-theme-gray-200`}
      >
        <div className="flex flex-col justify-between min-h-screen px-5 pt-8 pb-5">
          {/* Top */}
          <div>
            <Link href="/">
              <img
                src="/images/logo/logo-black.svg"
                className="block dark:hidden"
                alt="Logo"
              />
              <img
                src="/images/logo/logo-white.svg"
                className="hidden dark:block"
                width={156}
                alt="Logo"
              />
            </Link>
          </div>
          {/* Menu */}
          <div className="flex-1 pt-7">
            <div>
              <span className="text-xs uppercase dark:text-gray-300 text-theme-gray-400">
                Main
              </span>
              <SidebarNav />
            </div>
          </div>
          {/* Bottom */}
          <SidebarWidget />
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
