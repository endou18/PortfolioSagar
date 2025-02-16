"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/KrishnaTechs.jpg",
    jobTitle: "Full Stack Web Developer",
    company: "Krishna Techs",
    jobType: "Full Time",
    duration: "August 2024 – Present",
    stuffIDid: [
      "Developing and maintaining full-stack web applications, ensuring seamless integration between frontend and backend services.",
      "Building dynamic and interactive user interfaces using React.js and modern UI frameworks.",
      "Enhancing website performance and user engagement through optimized animations and responsive design.",
      
    ],
  },
  {
    companyImg: "/FlyMedia.jpg",
    jobTitle: "Web Developer",
    company: "Flymedia Technology",
    jobType: "Full Time",
    duration: "February 2024 – July 2024",
    stuffIDid: [
      "Designed and developed responsive React-based front-end interfaces using HTML, CSS, and JavaScript.",
      "Built and customized reusable React components to create dynamic and interactive web applications.",
      "Optimized website performance by implementing React hooks, state management (useState, useEffect), and lazy loading.",
      "Ensured cross-browser compatibility, mobile responsiveness, and smooth website functionality.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
