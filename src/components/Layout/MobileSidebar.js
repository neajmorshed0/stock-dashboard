import { SidebarContext } from "@/context/SidebarContext";
import { Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import SidebarNav from "./SidebarNav";
import {
  RiArrowRightSLine,
  RiCloseFill,
  RiExpandUpDownLine,
  RiHeadphoneLine,
  RiSettings2Line,
  RiVerifiedBadgeFill,
} from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "../Typography";

const menuItems = [
  {
    path: "/settings",
    label: "Settings",
    icon: <RiSettings2Line size={20} />,
  },
  {
    path: "/support",
    label: "Support",
    icon: <RiHeadphoneLine size={20} />,
  },
];

export default function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let pathname = usePathname();

  // const isActive = (path) => path === pathname;
  const isActive = (path) => pathname.startsWith(path);
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
        <div className="relative z-50">
          <div
            className="fixed inset-0 z-30 bg-black/40"
            onClick={closeSidebar}
          />
          <div className="absolute top-0 z-40 flex justify-center left-[272px]">
            <button type="button" className="p-2.5" onClick={closeSidebar}>
              <RiCloseFill className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
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
        <aside className="flex-col fixed inset-y-0  w-[272px] min-h-screen z-50 overflow-y-auto bg-white  border-r border-soft-200">
          <div className="flex flex-col justify-between min-h-screen">
            {/* Top */}
            <div className="px-5">
              <div className="flex items-center justify-between pt-6 pb-5 bg-white border-b border-soft-200">
                <div className="flex items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full "
                  >
                    <svg
                      className="size-10"
                      width="160"
                      height="158"
                      viewBox="0 0 160 158"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="160" height="158" rx="79" fill="#335CFF" />
                      <rect
                        width="72.5759"
                        height="72.5759"
                        rx="13.3333"
                        transform="matrix(0.965916 -0.258855 -0.258855 0.965916 63.231 62.2227)"
                        fill="url(#paint0_linear_836_1309)"
                        fillOpacity="0.48"
                      />
                      <rect
                        width="72.5759"
                        height="72.5759"
                        rx="13.3333"
                        transform="matrix(0.965916 -0.258855 -0.258855 0.965916 45.4536 44.4443)"
                        fill="url(#paint1_linear_836_1309)"
                        fillOpacity="0.8"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_836_1309"
                          x1="36.2879"
                          y1="0"
                          x2="36.2879"
                          y2="72.5759"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_836_1309"
                          x1="36.2879"
                          y1="0"
                          x2="36.2879"
                          y2="72.5759"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                  <div>
                    <h4 className="mb-1 text-sm font-medium leading-5 text-strong-950">
                      Apex
                    </h4>
                    <p className="text-xs leading-4 text-sub-600">
                      Finance & Banking
                    </p>
                  </div>
                </div>
                <div>
                  <button className="border rounded-md cursor-pointer p-0.5 size-6 inline-flex items-center justify-center shadow-custom-xs">
                    <RiExpandUpDownLine size={16} />
                  </button>
                </div>
              </div>
            </div>
            {/* Menu */}
            <div className="flex-1 space-y-5">
              <div className="pt-5 h-[285px] overflow-y-auto">
                <span className="px-5 text-xs font-medium uppercase text-soft-400">
                  Main
                </span>
                <SidebarNav />
              </div>
              {/* Bottom Menu */}
              <div>
                <span className="p-1 px-5 text-xs font-medium uppercase text-soft-400">
                  others
                </span>
                <ul className="px-5 mt-2 space-y-1">
                  {menuItems.map((nav) => (
                    <li key={nav.path}>
                      <Link
                        href={nav.path}
                        className={`flex relative items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 after:transition after:h-5 after:w-1 after:bg-primary-base after:absolute after:rounded-r after:left-0 after:translate-x-[-20px] after:top-1/2 after:-translate-y-1/2 ${
                          isActive(nav.path)
                            ? "text-strong-950 bg-weak-50 after:visible"
                            : "text-sub-600 bg-transparent after:invisible"
                        }`}
                      >
                        {/* Icon */}
                        <span
                          className={`${
                            isActive(nav.path)
                              ? "text-primary-base"
                              : "text-sub-600"
                          }`}
                        >
                          {nav.icon}
                        </span>
                        {/* Label */}
                        <span>{nav.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* pt-[245px] 2xl:mt-[180px] */}
            <div className="px-5">
              <div className="flex items-center justify-between w-full py-3 border-t border-soft-200">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src="/assets/avatar/avatar-1.png"
                      className="rounded-full size-10"
                      alt=""
                    />
                  </div>
                  <div>
                    <Typography
                      as="p"
                      size="sm"
                      className="flex items-center gap-1 font-medium"
                    >
                      Arthur Taylor
                      <RiVerifiedBadgeFill
                        size={16}
                        className="text-verified-base"
                      />
                    </Typography>
                    <Typography as="span" size="xs" className="text-sub-600">
                      arthur@alignui.com
                    </Typography>
                  </div>
                </div>
                <Link
                  href="/"
                  className="flex items-center justify-center transition rounded hover:bg-weak-50 size-6"
                >
                  <RiArrowRightSLine
                    size={20}
                    className="ml-auto text-sub-600"
                  />
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </TransitionChild>
    </Transition>
  );
}
