"use client";

import ProfileCard from "@/components/profileCard";

export default function Profile() {
  const abouts = [
    {
      name: "Zacky",
      species: "Human",
      age: "21 Years Old",
      occupation: "Software Engineer",
      faction: "Politeknik Negeri Bali",
      background:
        "Zacky is software engineer from Bali, Indonesia, and currently a student at Politeknik Negeri Bali, majoring in Information Technologies. Known for his passion for coding, he constiniously challenge himself by learning new things. His primary focus is on Python and PHP, though he is eager to explore new programming languages for collaborative opportunities.",
    },
  ];
  return (
    <>
      {abouts.map((item, index) => {
        return (
          <ProfileCard
            key={index + item.name}
            name={item.name}
            species={item.species}
            age={item.age}
            occupation={item.occupation}
            faction={item.faction}
            background={item.background}
          />
        );
      })}
    </>
  );
}
