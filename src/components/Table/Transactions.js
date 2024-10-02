"use client";
import {
  RiArrowDownSFill,
  RiArrowLeftDownLine,
  RiArrowRightUpLine,
  RiArrowUpSFill,
  RiBankLine,
  RiCommandLine,
  RiComputerLine,
  RiGlobalLine,
  RiHistoryLine,
  RiLineChartLine,
  RiMore2Line,
  RiPieChartLine,
  RiSearch2Line,
} from "@remixicon/react";
import React from "react";
import Typography from "../Typography";
import Input from "../Forms/Input";
import Button from "../Buttons";
import Checkbox from "../Forms/Checkbox";

export default function Transactions() {
  return (
    <div className="mt-8">
      {/* Search */}
      <div className="flex flex-col justify-between gap-5 sm:items-center sm:flex-row">
        <div className="flex items-center gap-3 grow">
          <div className="inline-flex items-center justify-center border rounded-full size-10 border-soft-200">
            <RiHistoryLine className="text-sub-600" size={20} />
          </div>
          <div>
            <Typography
              size="sm"
              as="span"
              className="block mb-1 font-medium text-strong-950"
            >
              Recent Transactions
            </Typography>
            <Typography as="p" size="xs" className="text-sub-600">
              Display the recent transactions in the table below.
            </Typography>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none text-soft-400">
              <RiSearch2Line size={20} className="text-soft-400" />
            </div>
            <Input className="w-full h-9 pr-11 pl-9" placeholder="Search" />
            <div className="absolute border inset-y-1/2 -translate-y-1/2 border-soft-200 h-5  rounded  right-1.5 flex items-center px-1 py-0.5 pointer-events-none text-soft-400">
              <RiCommandLine size={16} className="text-soft-400 shrink-0" />
              <span className="text-xs font-medium">1</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            See All
          </Button>
        </div>
      </div>
      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-weak-50">
              <th
                scope="col"
                className="px-4 py-3 font-normal rounded-l-lg whitespace-nowrap"
              >
                <div className="flex items-center gap-3 text-sm text-sub-600">
                  <Checkbox />
                  To / From
                  <div className="flex flex-col -space-y-3">
                    <button className="transition hover:text-soft-400">
                      <RiArrowUpSFill className="size-5" />
                    </button>
                    <button className="transition hover:text-soft-400">
                      <RiArrowDownSFill className="size-5" />
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-normal whitespace-nowrap"
              >
                <div className="flex items-center text-sm gap-2.5 text-sub-600">
                  Amount
                  <div className="flex flex-col -space-y-3">
                    <button className="transition hover:text-soft-400">
                      <RiArrowUpSFill className="size-5" />
                    </button>
                    <button className="transition hover:text-soft-400">
                      <RiArrowDownSFill className="size-5" />
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-normal whitespace-nowrap"
              >
                <div className="flex items-center text-sm gap-2.5 text-sub-600">
                  Account
                  <div className="flex flex-col -space-y-3">
                    <button className="transition hover:text-soft-400">
                      <RiArrowUpSFill className="size-5" />
                    </button>
                    <button className="transition hover:text-soft-400">
                      <RiArrowDownSFill className="size-5" />
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-normal whitespace-nowrap"
              >
                <div className="flex items-center text-sm gap-2.5 text-sub-600">
                  Date & Time
                  <div className="flex flex-col -space-y-3">
                    <button className="transition hover:text-soft-400">
                      <RiArrowUpSFill className="size-5" />
                    </button>
                    <button className="transition hover:text-soft-400">
                      <RiArrowDownSFill className="size-5" />
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-normal whitespace-nowrap"
              >
                <div className="flex items-center text-sm gap-2.5 text-sub-600">
                  Payment Method
                  <div className="flex flex-col -space-y-3">
                    <button className="transition hover:text-soft-400">
                      <RiArrowUpSFill className="size-5" />
                    </button>
                    <button className="transition hover:text-soft-400">
                      <RiArrowDownSFill className="size-5" />
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="relative px-4 py-3 rounded-r-lg whitespace-nowrap"
              >
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-soft-200">
            <tr>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiLineChartLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-strong-950"
                  >
                    Investment Return
                  </Typography>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  $560.00
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  Checking
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  12 September
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiGlobalLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-sub-600"
                  >
                    Wire
                  </Typography>
                </div>
              </td>
              <td className="relative px-4 py-3 whitespace-nowrap">
                <button className="inline-block hover:bg-weak-50">
                  <RiMore2Line />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="inline-flex items-center justify-center rounded-full text-sub-600 shrink-0 size-8">
                    <img
                      src="/assets/avatar/avatar-2.png"
                      className="rounded-full size-8"
                      alt=""
                    />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-strong-950"
                  >
                    James Brown
                  </Typography>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  -$35.20
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  Ops Payroll
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  12 September
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiArrowRightUpLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-sub-600"
                  >
                    Money Transfer
                  </Typography>
                </div>
              </td>
              <td className="relative px-4 py-3 whitespace-nowrap">
                <button className="inline-block hover:bg-weak-50">
                  <RiMore2Line />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiPieChartLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-strong-950"
                  >
                    Stock Dividend
                  </Typography>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  $1250.00
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  AP
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  12 September
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiGlobalLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-sub-600"
                  >
                    ACH
                  </Typography>
                </div>
              </td>
              <td className="relative px-4 py-3 whitespace-nowrap">
                <button className="inline-block hover:bg-weak-50">
                  <RiMore2Line />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="inline-flex items-center justify-center rounded-full text-sub-600 shrink-0 size-8">
                    <img
                      src="/assets/avatar/avatar-1.png"
                      className="rounded-full size-8"
                      alt=""
                    />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-strong-950"
                  >
                    Sophia Williams
                  </Typography>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  $150.00
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  Checking
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  12 September
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiArrowLeftDownLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-sub-600"
                  >
                    Money Transfer
                  </Typography>
                </div>
              </td>
              <td className="relative px-4 py-3 whitespace-nowrap">
                <button className="inline-block hover:bg-weak-50">
                  <RiMore2Line />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiComputerLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-strong-950"
                  >
                    Freelance Income
                  </Typography>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  $250.00
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  Checking
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Typography
                  as="span"
                  size="sm"
                  className="font-normal text-sub-600"
                >
                  12 September
                </Typography>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center border rounded-full text-sub-600 border-soft-200 shrink-0 size-8">
                    <RiBankLine size={20} />
                  </div>
                  <Typography
                    as="span"
                    size="sm"
                    className="font-normal text-sub-600"
                  >
                    ACH
                  </Typography>
                </div>
              </td>
              <td className="relative px-4 py-3 whitespace-nowrap">
                <button className="inline-block hover:bg-weak-50">
                  <RiMore2Line />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
