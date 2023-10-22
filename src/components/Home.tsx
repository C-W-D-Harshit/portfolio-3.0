"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "@/styles/home.scss";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home__info">
        <p>Howdy!</p>
        <p>I'm Harshit</p>
        <p>Full Stack Developer</p>
        <Typewriter
          options={{
            strings: [
              "Website",
              "Application",
              "Frontend",
              "Backend",
              "Database",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <Link href={"/resume.pdf"} target="_blank">
          <button className="home__btn">
            <BsFillCloudArrowDownFill />
            <p>Resume</p>
          </button>
        </Link>
      </div>
      <div className="home__image">
        <Image src={"/profile.jpg"} alt="profile" width={500} height={500} />
      </div>
      <Link href={"#techSkills"} className="home__scroll">
        <p>Scroll Down</p>
        <div className="mouse" />
      </Link>
    </section>
  );
}
