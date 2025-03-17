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
      title: "Password Manager",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://frontend-password-manager-ten.vercel.app/",
      gitLink: "https://github.com/sagarkumar1302/Frontend-Password-Manager",
      about:
        "It is a secure and user-friendly password manager designed to help users store and manage their credentials efficiently. The application emphasizes security, simplicity, and accessibility, allowing users to keep their sensitive information safe while accessing it seamlessly across devices.",
      stack: ["MERN", "javascript","Tailwind", ],
      img: "/PassManager.jpg",
    },
    
    {
      title: "SecurePass",
      gitLink: "https://github.com/sagarkumar1302/PassManager-Front-Auth",
      liveLink: "https://pass-manager-front-auth.vercel.app/",
      about:
        "A robust password manager with authentication, ensuring only authorized users can access their stored credentials. With advanced security measures and seamless login functionality, it protects user data while providing a smooth experience.",
      stack: ["MERN", "react-router", "javascript", "tailwindcss", "Jwt"],
      img: "/PassSecure.jpg",
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
      title: "Web Chat Application",
      gitLink: "https://github.com/sagarkumar1302/ChatAppFrontEnd",
      liveLink: "https://chat-appfrnt.vercel.app/",
      about:
        "Built a real-time chat application similar to WhatsApp, allowing users to send and receive messages instantly.Implemented JWT authentication and MongoDB database for secure user login and message storage.",
      stack: ["react.js", "express.js", "tailwind", "node.js","socket.io", "mongo db"],
      img: "/WebChat.jpg",
    },
    {
      title: "Shop Stock Management",
      gitLink: "https://mahashakti-jewellers.vercel.app/",
      liveLink: "https://github.com/sagarkumar1302/MahashaktiJewellers/",
      about:
        "Developed a stock management system to track gold and silver prices, storing historical data for reference.Implemented a sorting feature to efficiently filter stock and transaction history.",
      stack: ["react.js", "mongo db", "express.js", "node.js"],
      img: "/Shop.jpg",
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
      className="flex flex-col gap-6 md:gap-10 pt-[70px] md:pt-[0px]"
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
