"use client";
import { SidebarContext } from "@/context/SidebarContext";
import { Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment, useContext, useEffect } from "react";
import Link from "next/link";
import SidebarNav from "./SidebarNav";
import { usePathname } from "next/navigation";
import SidebarWidget from "../Widget/SidebarWidget";

export default function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let pathname = usePathname();

  useEffect(() => {
    closeSidebar();
  }, [pathname]);
  return (
    <Transition show={isSidebarOpen}>
      <TransitionChild
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-30 bg-black/40"
        />
      </TransitionChild>

      <TransitionChild
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside
          className={`fixed left-0 top-0 dark:border-gray-700 z-40 dark:bg-gray-900 bg-white xl:w-[290px]  border-r border-theme-gray-200`}
        >
          <div className="flex flex-col justify-between min-h-screen px-5 pt-8 pb-5">
            {/* Top */}
            <div className="flex items-center justify-between">
              <Link href="/">
                <img
                  src="/images/logo/logo-black.svg"
                  className="block dark:hidden"
                  alt=""
                />
                <img
                  src="/images/logo/logo-white.svg"
                  className="hidden dark:block"
                  alt=""
                />
              </Link>
              <button
                className="flex items-center justify-center rounded dark:text-white dark:bg-gray-800 text-secondary-300 size-8 bg-gray-50"
                onClick={closeSidebar}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </button>
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
            <SidebarWidget />
          </div>
        </aside>
      </TransitionChild>
    </Transition>
  );
}
