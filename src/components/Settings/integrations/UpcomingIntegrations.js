import React, { useState } from "react";
import Card from "@/components/Cards/Card";
import SwitchSm from "@/components/Switch/SwitchSm";
import { RiMagicFill } from "@remixicon/react";
import Badge from "@/components/Badges";

export default function UpcomingIntegrations() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="pb-4 border-b border-soft-200">
        <h4 className="mb-1 text-base font-medium leading-6 text-strong-950">
          Upcoming Integrations
        </h4>
        <p className="text-sm leading-5 text-sub-600">
          Preview of upcoming integrations.
        </p>
      </div>
      <div className="pt-4 space-y-3">
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.6647 15.2165L17.2075 3.1679L16 2L6.62269 11.0697L2.33526 15.2165C1.88825 15.6494 1.88825 16.3506 2.33526 16.7835L10.9025 25.0697L16 30L25.3773 20.9303L25.5225 20.7899L29.6647 16.7835C30.1118 16.3506 30.1118 15.6494 29.6647 15.2165ZM16 20.1394L11.7202 16L16 11.8606L20.2798 16L16 20.1394Z"
                    fill="#2684FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0001 11.8606C13.198 9.15007 13.1843 4.75994 15.9695 2.0332L6.60364 11.0881L11.7012 16.0184L16.0001 11.8606Z"
                    fill="url(#paint0_linear_202_9461)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2912 15.9889L16 20.1394C17.3525 21.4467 18.1124 23.2203 18.1124 25.0697C18.1124 26.9191 17.3525 28.6926 16 30L25.3888 20.9192L20.2912 15.9889Z"
                    fill="url(#paint1_linear_202_9461)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_202_9461"
                      x1="15.2358"
                      y1="7.67312"
                      x2="8.09658"
                      y2="10.7902"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.18" stopColor="#0052CC" />
                      <stop offset="1" stopColor="#2684FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_202_9461"
                      x1="16.8177"
                      y1="24.2788"
                      x2="23.9441"
                      y2="21.1838"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.18" stopColor="#0052CC" />
                      <stop offset="1" stopColor="#2684FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Jira
                  <Badge
                    size="small"
                    variant="lighter"
                    textTransform="uppercase"
                    marginLeft="ms-1"
                  >
                    Soon
                  </Badge>
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For agile project management and issue tracking.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm
                checked={enabled}
                onChange={setEnabled}
                disabled={true}
              />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex justify-between gap-3.5 items-center">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
                    fill="url(#paint0_radial_202_9439)"
                  />
                  <path
                    d="M20.5204 15.9411C18.5984 15.9411 17.0406 17.5212 17.0406 19.4704C17.0406 21.4198 18.5984 23 20.5204 23C22.4421 23 24 21.4198 24 19.4704C24 17.5212 22.4421 15.9411 20.5204 15.9411ZM11.4797 15.9414C9.55797 15.9414 8 17.5212 8 19.4706C8 21.4198 9.55797 23 11.4797 23C13.4016 23 14.9596 21.4198 14.9596 19.4706C14.9596 17.5212 13.4016 15.9414 11.4797 15.9414ZM19.4796 11.5293C19.4796 13.4785 17.9218 15.059 16.0001 15.059C14.0782 15.059 12.5203 13.4785 12.5203 11.5293C12.5203 9.58021 14.0782 8 16.0001 8C17.9218 8 19.4796 9.58021 19.4796 11.5293Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_202_9439"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(16 17.3026) scale(18.5537)"
                    >
                      <stop stopColor="#FFB900" />
                      <stop offset="0.6" stopColor="#F95D8F" />
                      <stop offset="0.9991" stopColor="#F95353" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Asana
                  <Badge
                    size="small"
                    variant="lighter"
                    textTransform="uppercase"
                    marginLeft="ms-1"
                  >
                    Soon
                  </Badge>
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For project management and task tracking.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm disabled={true} />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 5L17 20.7143L30 5H17Z" fill="#07363D" />
                  <path
                    d="M8.50003 12C12.0562 12 15 8.41579 15 5.00002H2.00002C2.00002 8.41579 4.94386 12 8.50003 12Z"
                    fill="#07363D"
                  />
                  <path
                    d="M17 27C17 23.5842 19.9439 20 23.5 20C27.0562 20 30 23.5842 30 27H17Z"
                    fill="#07363D"
                  />
                  <path d="M15 27V11.2857L2 27H15Z" fill="#07363D" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Zendesk
                  <Badge
                    size="small"
                    variant="lighter"
                    textTransform="uppercase"
                    marginLeft="ms-1"
                  >
                    Soon
                  </Badge>
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For customer support and ticket management.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm disabled={true} />
            </div>
          </div>
        </Card>{" "}
        <Card>
          <div className="flex gap-3.5 items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 border rounded-full shrink-0 border-soft-200">
                <svg
                  className="w-6 h-6"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="14" fill="#00A82D" />
                  <path
                    d="M12.7 11.0444C12.7 11.2235 12.6855 11.5219 12.5109 11.716C12.3217 11.895 12.0307 11.91 11.856 11.91C10.8737 11.91 9.51113 11.6631 8.58205 12.0443C10 9.5 12.7469 7.80934 12.7291 7.95513C12.5982 8.96191 12.7 10.0317 12.7 11.0444ZM15.6393 22.5955C15.6393 21.3568 16.6288 20.342 17.8511 20.342C18.2149 20.342 18.5059 20.6405 18.5059 21.0136C18.5059 21.2673 18.375 21.4762 18.1712 21.5956C17.9494 21.7321 17.6421 21.6684 17.4437 21.8493C17.2982 21.9687 17.1818 22.1627 17.1818 22.3716C17.1818 22.5955 17.2691 22.8044 17.4146 22.9537C17.6765 23.2223 18.0257 23.3715 18.4041 23.3715C19.3935 23.3715 20.1938 22.5507 20.1938 21.5359C20.1938 20.6255 19.5972 19.8196 18.8115 19.4615C17.619 18.8499 15.7945 19.1979 15.6539 17.2826C15.4352 18.2956 14.9527 20.1032 13.6458 20.1032C9.69801 20.3437 8.27507 17.1459 8 13.7605C8 13.0293 8.43653 12.5368 8.98948 12.4622C9.97895 12.4622 10.9684 12.4622 11.9579 12.4622C12.4672 12.4622 12.7582 12.3278 12.9474 12.1487C13.1948 11.91 13.253 11.5667 13.253 11.1638C13.253 10.1141 13.253 8.5 13.253 8.01483C13.253 7.3812 13.8059 7 14.5189 7C14.9389 7 15.3331 7.01476 15.7412 7.11939C16.6288 7.34325 16.818 8.26853 16.818 8.26853C16.818 8.26853 18.4914 8.56701 19.3353 8.71625C20.1356 8.86549 22.1146 8.9998 22.4929 11.0444C23.3805 15.9096 22.8422 20.6255 22.7985 20.6255C22.1728 25.2221 18.4477 24.9982 18.4477 24.9982C17.0936 24.9982 15.6393 24.0741 15.6393 22.5955ZM20.0047 14.6709C19.5245 14.6261 19.1171 14.8201 18.9716 15.1932C18.7653 15.7219 20.8923 16.1616 20.8923 15.432C20.8341 15.0141 20.4849 14.7306 20.0047 14.6709Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium text-strong-950">
                  Evernote
                  <Badge
                    size="small"
                    variant="lighter"
                    textTransform="uppercase"
                    marginLeft="ms-1"
                  >
                    Soon
                  </Badge>
                </h4>
                <p className="text-xs leading-4 text-sub-600">
                  For note-taking and knowledge management.
                </p>
              </div>
            </div>
            <div>
              <SwitchSm disabled={true} />
            </div>
          </div>
        </Card>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-faded-lighter">
          <RiMagicFill className="text-faded-base" size={20} />
          <p className="text-sm leading-5 text-strong-950">
            These integrations are on their way and will be added soon.
          </p>
        </div>
      </div>
    </>
  );
}
