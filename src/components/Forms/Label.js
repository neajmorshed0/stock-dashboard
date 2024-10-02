import React from "react";

const Label = ({ title, type }) => {
  let labelContent = title;

  switch (type) {
    case "required":
      labelContent = (
        <>
          {title} <span className="text-primary-base">*</span>
        </>
      );
      break;
    case "optional":
      labelContent = (
        <>
          {title}{" "}
          <span className="font-normal capitalize text-sub-600">
            (optional)
          </span>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <label className="block mb-1 text-sm font-medium leading-5 text-strong-950">
      {labelContent}
    </label>
  );
};

export default Label;
