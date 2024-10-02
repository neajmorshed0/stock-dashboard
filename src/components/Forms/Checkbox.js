import React, { useEffect, useRef } from "react";

export default function Checkbox({
  checked,
  indeterminate,
  onChange,
  className = "",
  ...props
}) {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const baseStyles =
    "bg-white border-2 rounded checked:outline-none focus:ring-transparent focus:ring-0 checked:ring-0 focus-visible:outline-none drop-shadow-custom-sm size-4 text-primary-base border-soft-200";

  return (
    <input
      type="checkbox"
      ref={checkboxRef}
      className={`${baseStyles} ${className}`}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
}
