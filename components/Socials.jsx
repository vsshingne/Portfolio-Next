import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/vsshingne",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhav-shingne-3a765828a/",
    Icon: RiLinkedinLine,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/VSPRIME",
    Icon: SiLeetcode,
  },
  {
    name: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/profile/vaibhavshingne",
    Icon: SiGeeksforgeeks,
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/vsprime",
    Icon: SiCodechef,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
