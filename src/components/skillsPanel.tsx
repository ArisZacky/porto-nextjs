import { useState } from "react";
import python from "../../public/TechStack/python.svg";
import php from "../../public/TechStack/php.svg";
import unity from "../../public/TechStack/unity.svg";
import mysql from "../../public/TechStack/mysql-logo.svg";
import SkillsImage from "./skillsImage";

const SkillsPanel = () => {
  const [activeTab, setActiveTab] = useState("Python");

  const skilldescription = [
    {
      skill: "Python",
      description:
        "Zacky began his journey with Python fueled by his curiosity about data analysis. This initial interest led him to explore how Python can be used to analyze data effectively. Alongside his data analysis skills, Zacky also has gained experience in developing web applications using Django. His growing expertise in both data analysis and web development highlights his readiness to tackle more complex challenges and advance his career.",
    },
    {
      skill: "PHP",
      description:
        "In the realm of web development, Zacky is a promising junior software engineer with a budding expertise in PHP. He is diving into the intricacies of server-side scripting and is particularly enthusiastic about using the Laravel framework. His hands-on experience with Laravel is shaping his ability to build robust and scalable web applications, reflecting his commitment to mastering modern development tools and methodologies.",
    },
    {
      skill: "Unity",
      description:
        "Zacky’s journey into Unity began during his internship at Stechoq, where he was tasked with building a simulation game. This project ignited his interest for game development, and he found himself drawn to Unity as the game engine of choice. Enthusiastic about his newfound interest, Zacky is dedicating himself to mastering Unity and creating engaging interactive experiences.",
    },
    {
      skill: "MySQL",
      description:
        "In the world of databases, Zacky is a junior engineer who is rapidly developing his skills with MySQL. He is dedicated to understanding and optimizing data management practices, learning how to efficiently query and manipulate databases. His eagerness to learn and adapt is helping him build a solid foundation in MySQL, and he’s excited about the opportunities to grow his expertise in managing data effectively.",
    },
  ];

  const handleTabClick = (skill: string) => {
    setActiveTab(skill);
  };

  const getDescription = () => {
    const skill = skilldescription.find((desc) => desc.skill === activeTab);
    return skill ? skill.description : "";
  };

  return (
    <>
      <ul
        className="flex justify-center gap-2 sm:gap-20"
        id="fullWidthTab"
        role="tablist"
      >
        {skilldescription.map(({ skill }) => (
          <li key={skill}>
            <button
              onClick={() => handleTabClick(skill)}
              type="button"
              role="tab"
              aria-controls={skill}
              aria-selected={activeTab === skill}
              className={`inline-block overflow-hidden transform transition-transform duration-300 hover:scale-125 ${
                activeTab === skill ? "text-blue-500" : ""
              }`}
            >
              <SkillsImage
                image={
                  { Python: python, PHP: php, Unity: unity, MySQL: mysql }[
                    skill
                  ]
                }
                altText={skill}
              />
            </button>
          </li>
        ))}
      </ul>
      <div id="fullWidthTabContent">
        <div
          className={`p-4 rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab ? "block" : "hidden"
          }`}
          id={activeTab}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
        >
          <div className="mb-2">
            <p className="font-bold text-xs sm:text-base">{activeTab}</p>
          </div>
          <div className="max-w border-t border-gray-200 dark:border-gray-600 text-xs sm:text-base">
            <p className="mt-2">{getDescription()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPanel;
