"use client";
import React, { Fragment } from "react";
import Card from "../Cards/Card";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

export default function WatchListDemo() {
  return (
    <Card>
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-lg font-semibold text-secondary-500">
          My Watchlist
        </h2>
        <div className="relative">
          <Menu>
            <MenuButton className="p-1 transition rounded-full hover:bg-weak-50 hover:text-strong-950">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
                  fill="#98A2B3"
                />
              </svg>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                anchor="left"
                transition
                className="flex flex-col w-32 py-1 mt-6 ml-2 transition duration-100 ease-out origin-top-right bg-white border rounded-lg border-soft-200 shadow-custom-xs"
              >
                <MenuItem>
                  <button className="px-2 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500">
                    Edit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="px-2 py-2 text-sm text-left transition hover:bg-gray-100 hover:text-secondary-500">
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
      <ul className="divide-y divide-theme-gray-200 h-[348px] overflow-y-auto mt-4 scrollbar scrollbar-thumb-theme-gray-200  scrollbar-track-secondary-500">
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/apple.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  APPL
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  Apple, Inc
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $4,008.65
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-success-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                  fill="#027A48"
                />
              </svg>
              11.01%
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/spotify.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  ABNB
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  Spotify.com
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $11,689.00
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-success-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                  fill="#027A48"
                />
              </svg>
              9.48
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/airbnb.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  APPL
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  Airbnb, Inc
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $32,227.00
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-error-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
                  fill="#B42318"
                />
              </svg>
              0.29%
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/apple.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  APPL
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  Apple, Inc
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $4,008.65
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-success-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                  fill="#027A48"
                />
              </svg>
              11.01%
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/envato.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  envt
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  Envato, Inc
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $13,895.65
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-success-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                  fill="#027A48"
                />
              </svg>
              3.79%
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
          <div className="grow">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/brands/qiwi.svg"
                  className="rounded-full size-10"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold leading-none uppercase text-secondary-500">
                  QIWI
                </h3>
                <span className="text-xs leading-none text-secondary-200">
                  qiwi.com, Inc
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary-500">
              $4,008.65
            </h4>
            <span className="flex items-center justify-end h-6 text-xs font-medium text-success-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                  fill="#027A48"
                />
              </svg>
              11.01%
            </span>
          </div>
        </li>
      </ul>
    </Card>
  );
}
