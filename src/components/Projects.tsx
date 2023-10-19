import React from "react";
import "@/styles/projects.scss";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const data = [
    {
      name: "Urbanbliss",
      description:
        "Urbanbliss is an e-commerce platform that offers a wide range of urban lifestyle products and services for online shoppers.",
      image: "/urbanbliss.png",
      link: "https://urbanbliss.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/urbanbliss",
      stack: "NEXTjs Custom Server, MongoDB, Redux",
    },
    {
      name: "Munch-Express",
      description:
        "Munch-Express is a food delivery platform that allows users to order food and track their deliveries in real-time using websockets.",
      image: "/munch-express.png",
      link: "https://munch-express.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/munch-express",
      stack: "NEXTjs Custom Server, MongoDB, Redux, Websockets",
    },
    {
      name: "Moviehub",
      description:
        "Moviehub is a movie information and discovery platform that provides access to a vast database of movies, allowing users to explore and search for their favorite films.",
      image: "/moviehub.png",
      link: "https://moviehub.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/moviehub",
      stack: "NEXTjs, Movie DB Api's",
    },
    {
      name: "Vista Cart",
      description:
        "Vista Cart is an e-commerce marketplace that offers a diverse selection of products from various vendors, providing a comprehensive online shopping experience.",
      image: "/vista.png",
      link: "https://vista-cart.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/vista-cart-v2",
      stack: "NEXTjs",
    },
  ];

  return (
    <section id="projects">
      <p>
        {"<"}
        <span>Projects</span>
        {"/>"}
      </p>

      <div className="projectHolder">
        {data?.map((item, index) => (
          <ProjectCard
            source={item.source}
            name={item.name}
            link={item.link}
            stack={item.stack}
            image={item.image}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
