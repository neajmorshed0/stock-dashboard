import React, { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { RiMore2Line } from "@remixicon/react";
export default function Dropdown() {
  return (
    <div>
      <Menu>
        <MenuButton className="p-1 transition rounded-full hover:bg-weak-50 hover:text-strong-950">
          <RiMore2Line className="text-sub-600" size={20} />
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            anchor="left"
            transition
            className="flex flex-col w-24 py-1 mt-12 ml-3 transition duration-100 ease-out origin-top-right bg-white border rounded-lg border-soft-200 shadow-custom-xs"
          >
            <MenuItem>
              <button className="px-2 py-1 text-sm text-left transition hover:bg-weak-50 hover:text-strong-950 text-sub-600">
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button className="px-2 py-1 text-sm text-left transition text-sub-600 hover:text-strong-950 hover:bg-weak-50">
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
