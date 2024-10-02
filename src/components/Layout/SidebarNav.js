"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  RiArrowLeftRightLine,
  RiArrowRightSLine,
  RiBankCardLine,
  RiBillLine,
  RiExchangeLine,
  RiHistoryLine,
  RiLayoutGridLine,
  RiPagesLine,
} from "@remixicon/react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Dashboard",
    icon: <RiLayoutGridLine size={20} />,
    subItems: [
      { name: "Demo One", path: "/home-one" },
      { name: "Demo Two", path: "/home-two" },
      { name: "Demo Three", path: "/home-three" },
      { name: "Demo Four", path: "/home-four" },
    ],
  },

  { name: "My Cards", icon: <RiBankCardLine size={20} />, path: "/my-cards" },
  {
    name: "Transfer",
    icon: <RiArrowLeftRightLine size={20} />,
    path: "/transfers",
  },
  {
    name: "Transactions",
    icon: <RiHistoryLine size={20} />,
    path: "/transactions",
  },
  {
    name: "Pages",
    icon: <RiPagesLine size={20} />,
    subItems: [
      { name: "Sign In", path: "/login" },
      { name: "Register", path: "/register" },
      { name: "Reset Password", path: "/reset-password" },
      { name: "OTP", path: "/otp" },
    ],
  },
  { name: "Payments", icon: <RiBillLine size={20} />, path: "/payments" },
  {
    name: "Exchange",
    icon: <RiExchangeLine size={20} />,
    path: "/send-money",
  },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef([]);

  const isActive = (path) => path === pathname;

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu(index);
            submenuMatched = true;
          }
        });
      }
    });
    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null && subMenuRefs.current[openSubmenu]) {
      setSubMenuHeight((prevHeights) => ({
        ...prevHeights,
        [openSubmenu]: subMenuRefs.current[openSubmenu].scrollHeight,
      }));
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <ul className="mt-2 space-y-1">
      {navItems.map((nav, index) => (
        <li key={nav.name} className="px-5">
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index)}
              className={`flex w-full relative after:content-[""] after:transition after:h-5 after:w-1 after:bg-primary-base after:absolute after:rounded-r after:left-0 after:-translate-x-5 after:top-1/2 after:-translate-y-1/2 items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 ${
                openSubmenu === index
                  ? "text-strong-950 bg-weak-50 after:visible"
                  : "text-sub-600 bg-transparent after:invisible"
              } cursor-pointer`}
            >
              <span
                className={`${
                  openSubmenu === index ? "text-primary-base" : "text-sub-600"
                }`}
              >
                {nav.icon}
              </span>
              {nav.name}
              <RiArrowRightSLine
                size={20}
                className={`ml-auto  transition-transform duration-200 ${
                  openSubmenu === index ? "rotate-90" : ""
                }`}
              />
            </button>
          ) : (
            <Link
              href={nav.path}
              className={`flex relative after:content-[""] after:transition after:h-5 after:w-1 after:bg-primary-base after:absolute after:rounded-r after:left-0 after:-translate-x-5 after:top-1/2 after:-translate-y-1/2 items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 ${
                isActive(nav.path)
                  ? "text-strong-950 bg-weak-50 after:visible"
                  : "text-sub-600 bg-transparent after:invisible"
              }`}
            >
              <span
                className={`${
                  isActive(nav.path) ? "text-primary-base" : "text-sub-600"
                }`}
              >
                {nav.icon}
              </span>
              {nav.name}
            </Link>
          )}
          {nav.subItems && (
            <div
              ref={(el) => (subMenuRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu === index ? `${subMenuHeight[index]}px` : "0px",
              }}
            >
              <ul className="mt-1 ml-4 space-y-1">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 ${
                        isActive(subItem.path)
                          ? "text-strong-950 bg-weak-50"
                          : "text-sub-600 bg-transparent"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
