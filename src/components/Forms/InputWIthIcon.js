import React from "react";

export default function InputWithIcon({
  type = "text",
  value,
  onChange,
  placeholder = "",
  iconStart = null,
  iconEnd = null,
  className = "",
  inputClassName = "",
  ...props
}) {
  const baseInputStyles =
    "w-full p-2.5 px-3 text-sm border placeholder:text-sm placeholder:text-soft-400 text-strong-950 placeholder:leading-5 focus:border-primary-base focus:outline-none focus:ring-0 rounded-custom shadow-custom-xs border-soft-200";

  return (
    <div className="relative">
      {iconStart && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-soft-400">
          {iconStart}
        </span>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseInputStyles} ${inputClassName} ${
          iconStart ? "pl-10" : ""
        } ${iconEnd ? "pr-10" : ""}`}
        {...props}
      />
      {iconEnd && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-soft-400">
          {iconEnd}
        </span>
      )}
    </div>
  );
}
