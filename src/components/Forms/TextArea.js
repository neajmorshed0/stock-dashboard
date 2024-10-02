"use client";
import React, { useRef, useState } from "react";

export default function Textarea({
  value,
  onChange,
  placeholder = "",
  maxLength = 200,
  className = "",
  ...props
}) {
  const textareaRef = useRef(null);
  const [charCount, setCharCount] = useState(value.length);

  const baseStyles =
    "w-full p-2.5 px-3 text-sm border min-h-24 border-soft-200 placeholder:text-sm placeholder:text-soft-400 text-strong-950 placeholder:leading-5 focus:border-primary-base focus:outline-none focus:ring-0 rounded-custom shadow-custom-xs resize-none  overflow-hidden";

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setCharCount(e.target.value.length);
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${baseStyles} ${className}`}
        maxLength={maxLength}
        {...props}
      />
      <span className="absolute text-xs text-right right-3 bottom-3 text-soft-400">
        {charCount}/{maxLength}
      </span>
    </div>
  );
}
