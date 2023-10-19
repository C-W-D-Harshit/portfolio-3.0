import Image from "next/image";
import React from "react";
import "@/styles/projects.scss";
import Link from "next/link";

export default function ProjectCard({
  image,
  name,
  description,
  link,
  source,
  stack,
}: {
  image: string;
  name: string;
  description: string;
  link: string;
  source: string;
  stack: string;
}) {
  return (
    <div className="projectCard">
      <div className="projectCard_img">
        <Image src={image} alt={name} width={500} height={400} quality={100} />
      </div>
      <p className="projectCard_name">{name}</p>
      <p>{description}</p>
      <p>
        <span>Stack:</span> {stack}
      </p>
      <div className="projectCard_btn">
        <Link target="_blank" href={source}>
          <button>Source</button>
        </Link>

        <Link target="_blank" href={link}>
          <button>Live</button>
        </Link>
      </div>
    </div>
  );
}
