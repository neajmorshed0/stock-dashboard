import React from "react";

export default function SwitchOutlineSm({
  checked,
  onChange,
  className = "",
  spanClassName = "",
}) {
  return (
    <div
      className={`group relative flex border border-soft-200 h-4 w-7 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${className} ${
        checked ? "bg-primary-base" : "bg-soft-200"
      }`}
      onClick={() => onChange(!checked)}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-2.5 translate-x-0 rounded-full bg-soft-200 ring-0 shadow-custom-xs transition duration-200 ease-in-out ${
          checked ? "translate-x-3" : ""
        } ${spanClassName}`}
      ></span>
    </div>
  );
}
