import React from "react";
import "@/styles/techSkills.scss";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiDeno,
  SiExpress,
  SiMongodb,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function TechSkills() {
  const data = [
    {
      name: "React",
      icon: <IoLogoReact />,
    },
    {
      name: "Nextjs",
      icon: <TbBrandNextjs />,
    },
    {
      name: "NodeJs",
      icon: <IoLogoNodejs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Sass",
      icon: <IoLogoSass />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "React Native",
      icon: <SiReact />,
    },
    {
      name: "Nginx",
      icon: <SiNginx />,
    },
    {
      name: "Deno",
      icon: <SiDeno />,
    },
  ];
  return (
    <section id="techSkills">
      <p>
        {"<"}
        <span>TechnicalSkills</span>
        {"/>"}
      </p>
      <div className="skills">
        <div>
          <p>Mobile & Web</p>
          <div>
            {data?.map((item, index) => (
              <div key={index}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
