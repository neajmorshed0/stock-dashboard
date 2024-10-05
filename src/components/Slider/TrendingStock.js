"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import Card from "../Cards/Card";
import { companies } from "@/utils/data";
import TrendingStockCard from "../StockCards/TrendingStockCard";

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
        <h2 className="text-lg font-semibold dark:text-white text-secondary-500">
          Trending Stocks
        </h2>
        <div className="flex gap-1.5">
          <button className="border btn-prev dark:text-white transition dark:bg-gray-900 dark:border-gray-700  bg-white hover:bg-theme-gray-500 border-theme-gray-200 rounded-[100px] size-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1667 4L6 8.16667L10.1667 12.3333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="border btn-prev dark:text-white transition dark:bg-gray-900 dark:border-gray-700  bg-white hover:bg-theme-gray-500 border-theme-gray-200 rounded-[100px] size-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 12.6667L10 8.5L5.83333 4.33333"
                stroke="currentColor"
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
          {companies.map((company) => (
            <SwiperSlide key={company.symbol}>
              <TrendingStockCard
                symbol={company.symbol}
                companyName={company.companyName}
                logoUrl={company.logoUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
}
