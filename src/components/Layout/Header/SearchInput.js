import React from "react";

export default function SearchInput() {
  return (
    <div className="relative w-full hidden sm:block sm:w-[430px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-soft-400">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.04184 9.37381C3.04184 5.87712 5.8772 3.04218 9.37517 3.04218C12.8731 3.04218 15.7085 5.87712 15.7085 9.37381C15.7085 12.8705 12.8731 15.7055 9.37517 15.7055C5.8772 15.7055 3.04184 12.8705 3.04184 9.37381ZM9.37517 1.54218C5.04911 1.54218 1.54184 5.04835 1.54184 9.37381C1.54184 13.6993 5.04911 17.2055 9.37517 17.2055C11.2675 17.2055 13.0031 16.5346 14.357 15.4178L17.1771 18.2381C17.47 18.531 17.9449 18.5311 18.2378 18.2382C18.5307 17.9453 18.5307 17.4704 18.2378 17.1775L15.4181 14.3575C16.5365 13.0035 17.2085 11.2671 17.2085 9.37381C17.2085 5.04835 13.7012 1.54218 9.37517 1.54218Z"
            fill="#667085"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-10 border rounded-lg placeholder:text-sm placeholder:text-secondary-200 h-11 border-theme-gray-200"
        placeholder="Search or type command..."
      />
      <div className="absolute border h-7 rounded-lg border-theme-gray-200 inset-y-1/2 -translate-y-1/2   right-2.5 flex items-center px-2 py-1 text-xs font-normal text-secondary-200 pointer-events-none text-soft-400">
        ⌘K
      </div>
    </div>
  );
}
