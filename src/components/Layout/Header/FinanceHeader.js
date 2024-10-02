import React from "react";
import Typography from "@/components/Typography";
import {
  RiArrowRightUpLine,
  RiNotification3Line,
  RiSearch2Line,
  RiShareForwardBoxFill,
} from "@remixicon/react";
import Button from "@/components/Buttons";
import PropTypes from "prop-types";

export default function FinanceHeader({
  iconType,
  imageSrc,
  Icon,
  title,
  description,
}) {
  return (
    <header className="z-30 flex flex-col sm:h-[85px] w-full gap-5 py-5 bg-white border-b sm:flex-row sm:items-center border-soft-200">
      <div className="grow flex gap-3.5 items-center">
        {/* Dynamic icon or image */}
        {iconType === "icon" ? (
          <div className="inline-flex items-center justify-center border rounded-full text-sub-600 size-12 border-soft-200">
            <Icon size={24} /> {/* Dynamic icon */}
          </div>
        ) : (
          <div className="rounded-full size-12">
            <img
              src={imageSrc} // Dynamic image source
              alt={title}
              className="rounded-full size-12"
            />
          </div>
        )}
        <div>
          <Typography
            as="span"
            size="lg"
            className="block mb-1 font-medium text-strong-950"
          >
            {title} {/* Dynamic title */}
          </Typography>
          <Typography as="p" size="sm" className="text-sub-600">
            {description} {/* Dynamic description */}
          </Typography>
        </div>
      </div>

      {/* Right side buttons - consistent across pages */}
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center transition rounded-custom hover:bg-weak-50 size-10 text-sub-600">
          <RiSearch2Line size={20} />
        </button>
        <button className="flex items-center justify-center transition rounded-custom hover:bg-weak-50 size-10 text-sub-600">
          <div className="relative">
            <RiNotification3Line size={20} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-white rounded-full shadow-sm">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
            </span>
          </div>
        </button>
        <Button size="md" endIcon={<RiArrowRightUpLine size={20} />}>
          Move Money
        </Button>
      </div>
    </header>
  );
}

FinanceHeader.propTypes = {
  iconType: PropTypes.oneOf(["icon", "image"]).isRequired,
  imageSrc: PropTypes.string, // Image source required when iconType is 'image'
  Icon: PropTypes.elementType, // Icon component required when iconType is 'icon'
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
