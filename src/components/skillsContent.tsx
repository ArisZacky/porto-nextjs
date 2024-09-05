"use client";

import python from "../../public/TechStack/python.svg";
import php from "../../public/TechStack/php.svg";
import unity from "../../public/TechStack/unity.svg";
import mysql from "../../public/TechStack/mysql-logo.svg";
import SkillsImage from "./skillsImage";

const SkillsContent = () => {
  return (
    <>
      <ul
        className="text-sm font-medium text-center text-gray-500 flex dark:text-gray-400 justify-center gap-2 sm:gap-20"
        id="fullWidthTab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li className="">
          <button
            id="Python-tab"
            data-tabs-target="#Python"
            type="button"
            role="tab"
            aria-controls="Python"
            aria-selected="true"
            className="inline-block overflow-hidden transform transition-transform duration-300 hover:scale-125"
          >
            <SkillsImage image={python} altText="Python" />
          </button>
        </li>
        <li className="">
          <button
            id="php-tab"
            data-tabs-target="#php"
            type="button"
            role="tab"
            aria-controls="php"
            aria-selected="false"
            className="inline-block overflow-hidden transform transition-transform duration-300 hover:scale-125"
          >
            <SkillsImage image={php} altText="PHP" />
          </button>
        </li>
        <li className="">
          <button
            id="unity-tab"
            data-tabs-target="#unity"
            type="button"
            role="tab"
            aria-controls="unity"
            aria-selected="false"
            className="inline-block overflow-hidden transform transition-transform duration-300 hover:scale-125"
          >
            <SkillsImage image={unity} altText="Unity" />
          </button>
        </li>
        <li className="">
          <button
            id="mysql-tab"
            data-tabs-target="#mysql"
            type="button"
            role="tab"
            aria-controls="mysql"
            aria-selected="false"
            className="inline-block overflow-hidden transform transition-transform duration-300 hover:scale-125"
          >
            <SkillsImage image={mysql} altText="MySQL" />
          </button>
        </li>
      </ul>
      <div id="fullWidthTabContent">
        {/* Tab Python */}
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="Python"
          role="tabpanel"
          aria-labelledby="Python-tab"
        >
          <div className="mb-2">
            <p className="font-bold">Python</p>
          </div>

          <div className="max-w border-t border-gray-200 dark:border-gray-600">
            <p className="mt-2">ini deskripsi skill python</p>
          </div>
        </div>

        {/* Tab PHP */}
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="php"
          role="tabpanel"
          aria-labelledby="php-tab"
        >
          <div className="mb-2">
            <p className="font-bold">PHP</p>
          </div>

          <div className="max-w border-t border-gray-200 dark:border-gray-600">
            <p className="mt-2">ini deskripsi skill PHP</p>
          </div>
        </div>
        {/* Tab Unity */}
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="unity"
          role="tabpanel"
          aria-labelledby="unity-tab"
        >
          <div className="mb-2">
            <p className="font-bold">Unity</p>
          </div>

          <div className="max-w border-t border-gray-200 dark:border-gray-600">
            <p className="mt-2">ini deskripsi skill unity</p>
          </div>
        </div>
        {/* Tab MySQL */}
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="mysql"
          role="tabpanel"
          aria-labelledby="mysql-tab"
        >
          <div className="mb-2">
            <p className="font-bold">Mysql</p>
          </div>
          <div className="max-w border-t border-gray-200 dark:border-gray-600">
            <p className="mt-2">ini deskripsi skill mysql</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SkillsContent;
