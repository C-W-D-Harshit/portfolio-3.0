import React from "react";
import "@/styles/home.scss";
import Link from "next/link";

export default function Home() {
  return (
    <section className="home" id="home">
      <div></div>
      <div></div>
      <Link href={"#techSkills"} className="home__scroll">
        <p>Scroll Down</p>
        <div className="mouse" />
      </Link>
    </section>
  );
}
