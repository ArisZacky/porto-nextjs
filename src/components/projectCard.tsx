import project1 from "../../public/projects/injection-machine-sim.png";
import project2 from "../../public/projects/intechfest2023.png";
import project3 from "../../public/projects/intechfest2022.png";
import project4 from "../../public/projects/lisan.png";
import project5 from "../../public/projects/ratatatata.png";
import project6 from "../../public/projects/simparis.png";

import ProjectCardContent from "./projectCardContent";
import Image, { StaticImageData } from "next/image";
interface Project {
  src: StaticImageData;
  alt: string;
  title: string;
  github: string | null;
  link: string | null;
}

const projects: Project[] = [
  {
    src: project1,
    alt: "Injection Machine Simulator",
    title: "Molding Sims",
    github: null,
    link: null,
  },
  {
    src: project2,
    alt: "Intechfest 2023",
    title: "Intechfest 2023",
    github: "https://github.com/ArisZacky/intechfest23",
    link: "https://intechfest.cc/",
  },
  {
    src: project3,
    alt: "Intechfest 2022",
    title: "Intechfest 2022",
    github: "https://github.com/ArisZacky/intechfest22",
    link: "https://intechfest2022.000webhostapp.com/",
  },
  {
    src: project6,
    alt: "Simparis",
    title: "Simparis",
    github: "https://github.com/ArisZacky/simparis",
    link: null,
  },
  {
    src: project4,
    alt: "Lisan",
    title: "Lisan",
    github: "https://github.com/ArisZacky/lisan",
    link: null,
  },
  {
    src: project5,
    alt: "Ratatatata",
    title: "Ratatatata",
    github: "https://github.com/ArisZacky/Ratatatata",
    link: null,
  },
];
const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCardContent
          key={index}
          src={project.src}
          alt={project.alt}
          title={project.title}
          github={project.github}
          link={project.link}
        />
      ))}
    </>
  );
};

export default ProjectCard;
