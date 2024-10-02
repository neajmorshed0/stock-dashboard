import React from "react";

export default function Input({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full p-2.5 px-3 text-sm border border-soft-200 placeholder:text-sm placeholder:text-soft-400 text-strong-950 placeholder:leading-5 focus:border-primary-base focus:outline-none focus:ring-0 rounded-custom shadow-custom-xs border-soft-200";

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}
