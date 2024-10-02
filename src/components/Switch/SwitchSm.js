import React from "react";

export default function SwitchSm({
  checked,
  onChange,
  className = "",
  spanClassName = "",
  trackClassName = "",
  disabled = false,
}) {
  return (
    <div
      className={`group relative flex h-4 w-7  rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${
        disabled
          ? "cursor-not-allowed bg-white border border-soft-200"
          : "cursor-pointer"
      } ${checked ? "bg-primary-base" : "bg-soft-200"} ${className}`}
      onClick={() => !disabled && onChange(!checked)}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block translate-x-0 rounded-full ${
          disabled
            ? "bg-soft-200 size-2.5 cursor-not-allowed"
            : "bg-white size-3 cursor-pointer"
        }  shadow-custom-xs transition duration-200 ease-in-out  ${
          checked ? "translate-x-3" : ""
        } ${spanClassName}`}
      >
        <span
          className={`absolute block w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 ${
            disabled ? "hidden" : checked ? "bg-primary-base" : "bg-soft-200"
          } ${trackClassName}`}
        ></span>
      </span>
    </div>
  );
}
