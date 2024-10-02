import React, { useState } from "react";
import Card from "@/components/Cards/Card";
import SwitchSm from "@/components/Switch/SwitchSm";
import { RiAddLine } from "@remixicon/react";

export default function Integrations() {
  const [enabledOffice, setEnabledOffice] = useState(true);
  const [enabledZoom, setEnabledZoom] = useState(false);
  const [enabledSlack, setEnabledSlack] = useState(false);
  const [enabledTrello, setEnabledTrello] = useState(false);
  return (
    <>
      <div className="pb-4 border-b border-soft-200">
        <h4 className="mb-1 text-base font-medium leading-6 text-strong-950">
          Integrations
        </h4>
        <p className="text-sm leading-5 text-sub-600">
          Connect and sync with essential tools and platforms.
        </p>
      </div>
      <div className="pt-4 space-y-3">
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  enableBackground="new 0 0 2075 2499.8"
                  viewBox="0 0 2075 2499.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 2016.6v-1519.8l1344.4-496.8 730.6 233.7v2045.9l-730.6 220.3-1344.4-483.3 1344.4 161.8v-1769.2l-876.8 204.6v1198.3z"
                    fill="#eb3c00"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Microsoft Office 365
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  Seamless collaboration and document management.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm checked={enabledOffice} onChange={setEnabledOffice} />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex justify-between gap-3.5 items-center">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z"
                    fill="#4087FC"
                  />
                  <path
                    d="M8.26667 10C7.56711 10 7 10.6396 7 11.4286V18.3571C7 20.369 8.44612 22 10.23 22L17.7333 21.9286C18.4329 21.9286 19 21.289 19 20.5V13.5C19 11.4881 17.2839 10 15.5 10L8.26667 10Z"
                    fill="white"
                  />
                  <path
                    d="M20.7122 12.7276C20.2596 13.1752 20 13.8211 20 14.5V17.3993C20 18.0782 20.2596 18.7242 20.7122 19.1717L23.5288 21.6525C24.1019 22.2191 25 21.7601 25 20.9005V11.1352C25 10.2755 24.1019 9.81654 23.5288 10.3832L20.7122 12.7276Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Zoom
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For conducting virtual meetings and interviews.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm checked={enabledZoom} onChange={setEnabledZoom} />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5002 14.9998C27.8808 14.9998 29 13.8806 29 12.5C29 11.1194 27.8807 10.0002 26.5001 10.0002C25.1194 10.0002 24 11.1195 24 12.5002V14.9998H26.5002ZM19.5 14.9998C20.8807 14.9998 22 13.8805 22 12.4998V5.50018C22 4.11947 20.8807 3.00018 19.5 3.00018C18.1193 3.00018 17 4.11947 17 5.50018V12.4998C17 13.8805 18.1193 14.9998 19.5 14.9998Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M5.49979 17.0002C4.11919 17.0002 3 18.1194 3 19.5C3 20.8806 4.1193 21.9998 5.49989 21.9998C6.8806 21.9998 8 20.8805 8 19.4998V17.0002H5.49979ZM12.5 17.0002C11.1193 17.0002 10 18.1195 10 19.5002V26.4998C10 27.8805 11.1193 28.9998 12.5 28.9998C13.8807 28.9998 15 27.8805 15 26.4998V19.5002C15 18.1195 13.8807 17.0002 12.5 17.0002Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M17.0002 26.5002C17.0002 27.8808 18.1194 29 19.5 29C20.8806 29 21.9998 27.8807 21.9998 26.5001C21.9998 25.1194 20.8805 24 19.4998 24L17.0002 24L17.0002 26.5002ZM17.0002 19.5C17.0002 20.8807 18.1195 22 19.5002 22L26.4998 22C27.8805 22 28.9998 20.8807 28.9998 19.5C28.9998 18.1193 27.8805 17 26.4998 17L19.5002 17C18.1195 17 17.0002 18.1193 17.0002 19.5Z"
                    fill="#ECB22E"
                  />
                  <path
                    d="M14.9998 5.49979C14.9998 4.11919 13.8806 3 12.5 3C11.1194 3 10.0002 4.1193 10.0002 5.49989C10.0002 6.88061 11.1195 8 12.5002 8L14.9998 8L14.9998 5.49979ZM14.9998 12.5C14.9998 11.1193 13.8805 10 12.4998 10L5.50024 10C4.11953 10 3.00024 11.1193 3.00024 12.5C3.00024 13.8807 4.11953 15 5.50024 15L12.4998 15C13.8805 15 14.9998 13.8807 14.9998 12.5Z"
                    fill="#36C5F0"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Slack
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For team communication and real-time collaboration.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm checked={enabledSlack} onChange={setEnabledSlack} />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.0133 4H7.0019C5.344 4 4 5.34315 4 7V25C4 26.6569 5.344 28 7.0019 28H25.0133C26.6653 27.9916 28 26.6509 28 25V7C28 5.34907 26.6653 4.00838 25.0133 4ZM9 7H13C14.1046 7 15 7.89543 15 9V23C15 24.1046 14.1046 25 13 25H9C7.89543 25 7 24.1046 7 23V9C7 7.89543 7.89543 7 9 7ZM23 7H19C17.8954 7 17 7.89543 17 9V16C17 17.1046 17.8954 18 19 18H23C24.1046 18 25 17.1046 25 16V9C25 7.89543 24.1046 7 23 7Z"
                    fill="url(#paint0_linear_202_9467)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_202_9467"
                      x1="16.0076"
                      y1="28"
                      x2="16.0076"
                      y2="4"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0052CC" />
                      <stop offset="0.51698" stopColor="#217EF8" />
                      <stop offset="1" stopColor="#2684FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Trello
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For task management and project collaboration.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm checked={enabledTrello} onChange={setEnabledTrello} />
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <button className="flex py-2.5 px-4 items-center justify-center w-full gap-2 text-sm font-medium leading-5 border text-primary-base transition hover:bg-primary-base/5 border-primary-base rounded-custom ">
          <RiAddLine size={20} />
          Add Integration
        </button>
      </div>
    </>
  );
}
