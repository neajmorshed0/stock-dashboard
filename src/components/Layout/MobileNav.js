"use client";
import React, { useContext } from "react";
import {
  RiBox3Fill,
  RiMenu2Fill,
  RiNotification3Line,
  RiSearch2Line,
} from "@remixicon/react";
import { SidebarContext } from "@/context/SidebarContext";
import Typography from "../Typography";
import Link from "next/link";

export default function MobileNav() {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <nav className="sticky top-0 z-30 px-4 bg-white xl:hidden">
      <div className="flex items-center justify-between w-full py-4 border-b border-soft-200">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-base"
          >
            <RiBox3Fill size={24} />
          </Link>
          <div>
            <Typography
              size="sm"
              as="span"
              className="mb-1 font-medium text-strong-950"
            >
              Apex
            </Typography>
            <Typography size="xs" as="p" className="leading-4 text-sub-600">
              Finance & Banking
            </Typography>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-3 xl:hidden">
            <button className="inline-flex items-center justify-center w-10 h-10 text-sub-600">
              <RiSearch2Line size={24} />
            </button>
            <button className="inline-flex items-center justify-center w-10 h-10 text-sub-600">
              <div className="relative w-6 h-6">
                <RiNotification3Line size={24} />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 bg-white rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </span>
              </div>
            </button>
          </div>
          <button className="p-2" onClick={toggleSidebar}>
            <RiMenu2Fill size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
