"use client";

import Triangle from "../../public/PlaystationButtons/PlayStation_button_T.svg";
import Square from "../../public/PlaystationButtons/PlayStation_button_S.svg";
import Circle from "../../public/PlaystationButtons/PlayStation_button_C.svg";
import X from "../../public/PlaystationButtons/PlayStation_button_X.svg";
import Start from "../../public/PlaystationButtons/PlayStation_button_Start.svg";
import PlaystationLogo from "../../public/PlaystationButtons/Playstation_logo_colour.svg";

import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-full bg-[var(--background-playstation-color)]">
        <button
          data-drawer-target="sidebar"
          data-drawer-toggle="sidebar"
          aria-controls="sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[var(--background-playstation-color)]">
          <a
            href="/"
            className="flex items-center ps-2.5 mb-5 hover:no-underline hover:text-gray-900 gap-3"
          >
            <Image
              src={PlaystationLogo}
              alt="Playstation Logo"
              style={{ width: 24, height: "auto" }}
              priority
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-neutral-950 ">
              Zacky&apos;s
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 hover:no-underline hover:text-gray-900 group"
              >
                <Image
                  src={Circle}
                  alt="Circle Button"
                  width={24}
                  height={24}
                  priority
                />
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 hover:no-underline hover:text-gray-900 group"
              >
                <Image
                  src={Square}
                  alt="Square Button"
                  width={24}
                  height={24}
                  priority
                />
                <span className="ms-3">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/project"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 hover:no-underline hover:text-gray-900 group"
              >
                <Image
                  src={Triangle}
                  alt="Triangle Button"
                  width={24}
                  height={24}
                  priority
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Project</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 hover:no-underline hover:text-gray-900 group"
              >
                <Image src={X} alt="X Button" width={24} height={24} priority />
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
            <li>
              <a
                href="/certificate"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 hover:no-underline hover:text-gray-900 group"
              >
                <Image
                  src={Start}
                  alt="Start Button"
                  style={{ width: 24, height: "auto" }}
                  priority
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificate
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
