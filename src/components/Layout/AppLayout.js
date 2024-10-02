"use client";
import React, { useContext, useEffect } from "react";

import { SidebarContext } from "@/context/SidebarContext";

import { usePathname } from "next/navigation";
import Link from "next/link";
import AppHeader from "./Header/AppHeader";

export default function AppLayout({ children }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const { toggleSidebar } = useContext(SidebarContext);
  let pathname = usePathname();

  // const isActive = (path) => path === pathname;
  const isActive = (path) => pathname.startsWith(path);

  useEffect(() => {
    closeSidebar();
  }, [pathname]);
  return (
    <div className="min-h-screen xl:flex">
      <aside className="fixed xl:block left-0  bg-white xl:w-[290px] hidden border-r border-[#E4E7EC]">
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
              <nav className="pt-4"></nav>
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
      {/* <MobileSidebar /> */}
      {/* px-4 xl:px-8 */}
      <div className="flex-1 xl:ml-[290px]">
        <AppHeader />
        <main className="min-h-screen p-6 bg-theme-gray-300 -300">
          {children}
        </main>
      </div>
    </div>
  );
}
