"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownSLine, RiGlobalLine } from "@remixicon/react";
import clsx from "clsx";
import React, { useState } from "react";

// Array of language options
const languageOptions = [
  { value: "en", label: "ENG" },
  { value: "es", label: "SPA" },
  { value: "fr", label: "FRE" },
  // Add more language options here
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(languageOptions[0]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative w-full flex gap-1 h-5 items-center justify-between rounded-custom bg-white p-2 text-left text-strong-950",
            "focus:outline-none"
          )}
        >
          <RiGlobalLine className="text-soft-400" size={16} />
          <span className="text-sm text-sub-600">{selected.label}</span>
          {/* Display the selected language */}
          <RiArrowDownSLine
            size={20}
            className="text-sub-600"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          className={clsx(
            "absolute z-20 rounded-custom bg-white border border-soft-200 p-1 w-20",
            "transition duration-100 ease-in transform -translate-y-32"
          )}
        >
          {languageOptions.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className="group transition text-sub-600 hover:bg-weak-50 flex cursor-pointer rounded-lg py-1.5 px-2 text-center select-none text-sm"
            >
              {option.label} {/* Display language option label */}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
