"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import Card from "../Cards/Card";

export default function TrendingStock() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    speed: 1500,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Card>
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-lg font-semibold text-secondary-500">
          Trending Stocks
        </h2>
        <div className="flex gap-1.5">
          <button className="border btn-prev transition bg-white hover:bg-theme-gray-500 border-theme-gray-200 rounded-[100px] size-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1667 4L6 8.16667L10.1667 12.3333"
                stroke="#344054"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="border btn-next transition bg-white hover:bg-theme-gray-500 border-theme-gray-200 rounded-[100px] size-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 12.6667L10 8.5L5.83333 4.33333"
                stroke="#344054"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-theme-gray-500">
              <div className="flex justify-between pb-5 border-b border-theme-gray-200">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src="/images/brands/tesla.svg"
                      className="rounded-full size-10"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-none uppercase text-secondary-500">
                      TSLA
                    </h3>
                    <span className="text-xs leading-none text-secondary-200">
                      Tesla, Inc
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-secondary-300">
                    $192.53
                  </h2>
                  <span className="flex items-center gap-1 text-xs font-medium text-success-500">
                    <svg
                      className="size-3"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.06462 1.62394C6.20193 1.47073 6.40135 1.37433 6.62329 1.37433C6.6236 1.37433 6.62391 1.37433 6.62422 1.37433C6.81631 1.37416 7.00845 1.44732 7.15505 1.59381L10.1551 4.59181C10.4481 4.8846 10.4483 5.35947 10.1555 5.65247C9.86273 5.94546 9.38785 5.94563 9.09486 5.65284L7.37329 3.93248L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93579L4.15516 5.65282C3.86218 5.94562 3.3873 5.94547 3.0945 5.65249C2.8017 5.3595 2.80185 4.88463 3.09484 4.59183L6.06462 1.62394Z"
                        fill="#027A48"
                      />
                    </svg>
                    1.01%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2">
                <button className="flex justify-center px-5 py-3 text-sm font-medium transition bg-white border rounded-lg h-11 items- center shrink-0 hover:border-primary-500 hover:text-primary-500 border-theme-gray-100 shadow-custom-xs text-secondary-300">
                  Short Stock
                </button>
                <button className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition border rounded-lg h-11 shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 shadow-custom-xs">
                  Buy Stock
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-theme-gray-500">
              <div className="flex justify-between pb-5 border-b border-theme-gray-200">
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
                      AAPL
                    </h3>
                    <span className="text-xs leading-none text-secondary-200">
                      Apple, Inc
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-secondary-300">
                    $192.53
                  </h2>
                  <span className="flex items-center gap-1 text-xs font-medium text-success-500">
                    <svg
                      className="size-3"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.06462 1.62394C6.20193 1.47073 6.40135 1.37433 6.62329 1.37433C6.6236 1.37433 6.62391 1.37433 6.62422 1.37433C6.81631 1.37416 7.00845 1.44732 7.15505 1.59381L10.1551 4.59181C10.4481 4.8846 10.4483 5.35947 10.1555 5.65247C9.86273 5.94546 9.38785 5.94563 9.09486 5.65284L7.37329 3.93248L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93579L4.15516 5.65282C3.86218 5.94562 3.3873 5.94547 3.0945 5.65249C2.8017 5.3595 2.80185 4.88463 3.09484 4.59183L6.06462 1.62394Z"
                        fill="#027A48"
                      />
                    </svg>
                    3.59%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2">
                <button className="flex justify-center px-5 py-3 text-sm font-medium transition bg-white border rounded-lg h-11 items- center shrink-0 hover:border-primary-500 hover:text-primary-500 border-theme-gray-100 shadow-custom-xs text-secondary-300">
                  Short Stock
                </button>
                <button className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition border rounded-lg h-11 shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 shadow-custom-xs">
                  Buy Stock
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-theme-gray-500">
              <div className="flex justify-between pb-5 border-b border-theme-gray-200">
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
                      SPOT
                    </h3>
                    <span className="text-xs leading-none text-secondary-200">
                      Spotify.com
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-secondary-300">
                    $102.53
                  </h2>
                  <span className="flex items-center gap-1 text-xs font-medium text-success-500">
                    <svg
                      className="size-3"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.06462 1.62394C6.20193 1.47073 6.40135 1.37433 6.62329 1.37433C6.6236 1.37433 6.62391 1.37433 6.62422 1.37433C6.81631 1.37416 7.00845 1.44732 7.15505 1.59381L10.1551 4.59181C10.4481 4.8846 10.4483 5.35947 10.1555 5.65247C9.86273 5.94546 9.38785 5.94563 9.09486 5.65284L7.37329 3.93248L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93579L4.15516 5.65282C3.86218 5.94562 3.3873 5.94547 3.0945 5.65249C2.8017 5.3595 2.80185 4.88463 3.09484 4.59183L6.06462 1.62394Z"
                        fill="#027A48"
                      />
                    </svg>
                    1.01%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2">
                <button className="flex justify-center px-5 py-3 text-sm font-medium transition bg-white border rounded-lg h-11 items- center shrink-0 hover:border-primary-500 hover:text-primary-500 border-theme-gray-100 shadow-custom-xs text-secondary-300">
                  Short Stock
                </button>
                <button className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition border rounded-lg h-11 shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 shadow-custom-xs">
                  Buy Stock
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-theme-gray-500">
              <div className="flex justify-between pb-5 border-b border-theme-gray-200">
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
                      ABNB
                    </h3>
                    <span className="text-xs leading-none text-secondary-200">
                      Airbnb, Inc
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-secondary-300">
                    $52.53
                  </h2>
                  <span className="flex items-center gap-1 text-xs font-medium text-success-500">
                    <svg
                      className="size-3"
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
              </div>
              <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2">
                <button className="flex justify-center px-5 py-3 text-sm font-medium transition bg-white border rounded-lg h-11 items- center shrink-0 hover:border-primary-500 hover:text-primary-500 border-theme-gray-100 shadow-custom-xs text-secondary-300">
                  Short Stock
                </button>
                <button className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition border rounded-lg h-11 shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 shadow-custom-xs">
                  Buy Stock
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Card>
  );
}
