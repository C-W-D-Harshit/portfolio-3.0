import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import "@/styles/layout/footer.scss";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      name: "linkedIn",
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
  function getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();
  return (
    <div className="footer">
      <div className="footer_">
        <div className="footer__logo">
          <p>portfolio.</p>
        </div>
        <div className="footer__links">
          {data?.map((item, index) => (
            <Link href={item.link} key={index}>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="seprator"></div>
      <p>
        <AiOutlineCopyrightCircle /> {currentYear}{" "}
        <span style={{ marginLeft: ".5rem" }}>
          <Link href={"/"}>Harshit Sharma</Link>
        </span>
        . All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
