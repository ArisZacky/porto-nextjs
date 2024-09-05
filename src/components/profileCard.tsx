"use client";

import SkillsContent from "./skillsContent";

const ProfileCard = (props) => {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="sm:hidden">
          <label className="sr-only">Select tab</label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Profile</option>
            <option>Skills</option>
            <option>Hobbies</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          data-tabs-active-classes="hover:text-gray-600"
          role="tablist"
        >
          <li className="w-full">
            <button
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
              className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 aria-selected:text-gray-900 aria-selected:bg-gray-100 "
            >
              Profile
            </button>
          </li>
          <li className="w-full">
            <button
              id="skills-tab"
              data-tabs-target="#skills"
              type="button"
              role="tab"
              aria-controls="skills"
              aria-selected="false"
              className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 aria-selected:text-gray-900 aria-selected:bg-gray-100 "
            >
              Skills
            </button>
          </li>
          {/* <li className="w-full">
            <button
              id="hobbies-tab"
              data-tabs-target="#hobbies"
              type="button"
              role="tab"
              aria-controls="hobbies"
              aria-selected="false"
              className="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 aria-selected:text-gray-900 aria-selected:bg-gray-100"
            >
              Hobbies
            </button>
          </li> */}
        </ul>
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          {/* Tab Profile */}
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 transition ease-in-out delay-150"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="max-w">
              <p className="text-gray-900 mb-2">
                <span className="font-bold">Name: </span>
                {props.name}
              </p>
              <p className="text-gray-900 mb-2">
                <span className="font-bold">Species: </span>
                {props.species}
              </p>
              <p className="text-gray-900 mb-2">
                <span className="font-bold">Age: </span>
                {props.age}
              </p>
              <p className="text-gray-900 mb-2">
                <span className="font-bold">Occupation: </span>
                {props.occupation}
              </p>
              <p className="text-gray-900 mb-2">
                <span className="font-bold">Faction: </span>
                {props.faction}
              </p>
              <p className="text-gray-900 text-justify mb-2">
                <span className="font-bold">Background: </span>
                {props.background}
              </p>
              <a
                href="https://drive.google.com/file/d/1s4zxtKG1X3z6OXUq6R2ECKmMfMjVb4I3/view?usp=sharing"
                target="_blank"
                className="text-gray-900 font-bold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-xs font-medium rounded-lg px-5 py-2.5 mt-3 w-fit"
              >
                Download His CV
              </a>
            </div>
          </div>

          {/* Tab Skills */}
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="skills"
            role="tabpanel"
            aria-labelledby="skills-tab"
          >
            <SkillsContent />
          </div>
          {/* Tab Hobbies
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="hobbies"
            role="tabpanel"
            aria-labelledby="hobbies-tab"
          >
            <div>tes</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
