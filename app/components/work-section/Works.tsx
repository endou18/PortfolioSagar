import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Number Guessing Game (Binary Search Algorithm)",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://offsetcomms.africa/",
      about:
        "Developed a console-based game that uses Binary Search Algorithm to guess the user’s number efficiently.Implemented recursive logic to continuously narrow down the number range until the correct number is found.",
      stack: ["binary search", "javascript",],
      img: "/offset-folio.svg",
    },
    {
      title: "Web Chat Application",
      gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "Built a real-time chat application similar to WhatsApp, allowing users to send and receive messages instantly.Implemented JWT authentication and MongoDB database for secure user login and message storage.",
      stack: ["react.js", "express.js", "chakra ui", "node.js","socket.io", "mongo db"],
      img: "/shortly.svg",
    },
    {
      title: "E-Commerce Website",
      gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://where-in-the-world-ade.netlify.app/",
      about:
        "Developed a full-stack e-commerce platform with a user-friendly interface, dynamic pricing, and interactive offers.Integrated a payment gateway (Stripe API) for secure transactions.",
      stack: ["react", "react-router", "javascript", "tailwindcss", "Stripe"],
      img: "/witw.svg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Shop Stock Management",
      gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "Developed a stock management system to track gold and silver prices, storing historical data for reference.Implemented a sorting feature to efficiently filter stock and transaction history.",
      stack: ["react.js", "mongo db", "material ui", "express.js", "node.js"],
      img: "/multistep.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
