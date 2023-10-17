import React from "react";
import "@/styles/layout/header.scss";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  const data = [
    {
      name: "linked in",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/cwd-harshit",
    },
    {
      name: "github",
      icon: <FaGithub />,
      link: "https://github.com/C-W-D-Harshit",
    },
    {
      name: "instagram",
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/cwd.harshit",
    },
    {
      name: "twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/cwd_harshit",
    },
  ];
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <p>portfolio.</p>
      </Link>
      <div className="header__links">
        {data?.map((item, index) => (
          <Link target="_blank" href={item.link} key={index}>
            {item.icon}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
