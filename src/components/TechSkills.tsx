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
import { BiLogoCPlusPlus, BiLogoJava, BiLogoPython } from "react-icons/bi";

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
  const data1 = [
    {
      name: "Java",
      icon: <BiLogoJava />,
    },
    {
      name: "Python",
      icon: <BiLogoPython />,
    },
    {
      name: "C++",
      icon: <BiLogoCPlusPlus />,
    },
  ];
  const data2 = [
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
          <div className="wb">
            {data?.map((item, index) => (
              <div key={index}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p>Programing</p>
            <div className="wb">
              {data1?.map((item, index) => (
                <div key={index}>
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>Miscellaneous</p>
            <div className="wb">
              {data2?.map((item, index) => (
                <div key={index}>
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
