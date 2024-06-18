import { FooterData } from "@/lib/mockData";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <main>
      <footer className="bg-[#EDEDEC] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-flow-col grid-cols-2 w-full">
          {FooterData.map((section) => (
            <div key={section.id} className="m-4">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.children.map((item) => (
                  <li key={item.id} className="mb-2">
                    <Link
                      href={item.url}
                      className="text-sm text-gray-500 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 sm:mt-6 mt-3">
          Copyright &copy; 2021 Hairsense Retail. All rights reserved.
        </p>
        <div className="flex justify-center items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="m-2 text-gray-400 hover:text-gray-500"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}

export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com/hairsenseretail/",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: <LinkedinIcon />,
  },
  {
    id: 3,
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: <InstagramIcon />,
  },
  {
    id: 5,
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: <YoutubeIcon />,
  },
];
