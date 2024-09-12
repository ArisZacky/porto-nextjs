import React, { useState } from "react";
import SkillsPanel from "./skillsPanel";
import InterestPanel from "./interestPanel";

const ProfileCard = (props) => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="sm:hidden">
          <label className="sr-only">Select tab</label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value)}
          >
            <option value="profile">Profile</option>
            <option value="skills">Skills</option>
            <option value="interest">Interest</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse m-0"
          role="tablist"
        >
          <li className="w-full">
            <button
              onClick={() => handleTabChange("profile")}
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              className={`inline-block w-full p-4 rounded-ss-lg ${
                activeTab === "profile"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              } focus:outline-none`}
            >
              Profile
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => handleTabChange("skills")}
              type="button"
              role="tab"
              aria-controls="skills"
              aria-selected={activeTab === "skills"}
              className={`inline-block w-full p-4 ${
                activeTab === "skills"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              } focus:outline-none`}
            >
              Skills
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => handleTabChange("interest")}
              type="button"
              role="tab"
              aria-controls="interest"
              aria-selected={activeTab === "interest"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "interest"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              } focus:outline-none`}
            >
              Interest
            </button>
          </li>
        </ul>
        <div className="border-t border-gray-200 dark:border-gray-600">
          {/* Tab Profile */}
          <div
            className={`p-4 bg-gray-50 rounded-lg md:p-8 dark:bg-gray-800 transition ease-in-out delay-150 ${
              activeTab === "profile" ? "block" : "hidden"
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="max-w">
              <p className="text-gray-900 mb-2 text-xs sm:text-base">
                <span className="font-bold">Name: </span>
                {props.name}
              </p>
              <p className="text-gray-900 mb-2 text-xs sm:text-base">
                <span className="font-bold">Species: </span>
                {props.species}
              </p>
              <p className="text-gray-900 mb-2 text-xs sm:text-base">
                <span className="font-bold">Age: </span>
                {props.age}
              </p>
              <p className="text-gray-900 mb-2 text-xs sm:text-base">
                <span className="font-bold">Occupation: </span>
                {props.occupation}
              </p>
              <p className="text-gray-900 mb-2 text-xs sm:text-base">
                <span className="font-bold">Faction: </span>
                {props.faction}
              </p>
              <p className="text-gray-900 text-justify mb-2 text-xs sm:text-base">
                <span className="font-bold">Background: </span>
                {props.background}
              </p>
              <a
                href="https://drive.google.com/file/d/1p9Q0OaYoxBIUHyttyR5GXVibdt8cy-Kf/view?usp=sharing"
                target="_blank"
                className="nes-btn w-fit text-xs sm:text-base"
              >
                Download His CV
              </a>
            </div>
          </div>
          {/* Tab Skills */}
          <div
            className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 transition ease-in-out delay-150 ${
              activeTab === "skills" ? "block" : "hidden"
            }`}
            id="skills"
            role="tabpanel"
            aria-labelledby="skills-tab"
          >
            <SkillsPanel />
          </div>
          {/* Tab Interest */}
          <div
            className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 transition ease-in-out delay-150 ${
              activeTab === "interest" ? "block" : "hidden"
            }`}
            id="interest"
            role="tabpanel"
            aria-labelledby="interest-tab"
          >
            <InterestPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
