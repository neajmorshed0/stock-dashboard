import Button from "@/components/Buttons";
import Card from "@/components/Cards/Card";
import {
  RiChromeLine,
  RiCloseLine,
  RiFirefoxLine,
  RiMacbookLine,
  RiSmartphoneLine,
} from "@remixicon/react";
import React from "react";

const cardData = [
  {
    icon: <RiMacbookLine size={20} />,
    title: "Macbook Pro",
    time: "15 min ago",
    location: "London, United Kingdom",
  },
  {
    icon: <RiSmartphoneLine size={20} />,
    title: "iPhone X",
    time: "30 min ago",
    location: "San Francisco, USA",
  },
  {
    icon: <RiFirefoxLine size={20} />,
    title: "Mozilla Firefox",
    time: "45 min ago",
    location: "New York, USA",
  },
  {
    icon: <RiChromeLine size={20} />,
    title: "Google Chrome",
    time: "2 hour ago",
    location: "Berlin, Germany",
  },
];

export default function ActiveSession() {
  return (
    <>
      <div className="pb-4 border-b border-soft-200">
        <h4 className="mb-1 text-base font-medium leading-6 text-strong-950">
          Active Sessions
        </h4>
        <p className="text-sm leading-5 text-sub-600">
          Monitor and manage all your active sessions.
        </p>
      </div>
      <div className="pt-4 space-y-3">
        {cardData.map((card, index) => (
          <Card key={index}>
            <div className="flex gap-3.5 items-center justify-between">
              <div className="flex gap-3.5 items-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-faded-lighter shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium text-strong-950">
                    {card.title}{" "}
                    <span className="inline-block ml-1 text-xs font-normal text-sub-600">
                      ({card.time})
                    </span>
                  </h4>
                  <p className="text-xs leading-4 text-sub-600">
                    {card.location}
                  </p>
                </div>
              </div>
              <div>
                <button className="text-sub-600">
                  <RiCloseLine size={20} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-5">
        <Button size="md" variant="outline" type="error" className="w-full">
          Select Devices to Log Out
        </Button>
      </div>
    </>
  );
}
