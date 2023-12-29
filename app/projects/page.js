"use client";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Projects from "@/sections/ProjectsList";
import ProjectComp from "@/components/ProjectComp";

const page = () => {
  return (
    <div className="text-purple pt-16 bg-darkPurple" id="projects">
      <Preloader />
      <Navbar />
      <div className="flex items-center justify-center text-center text-5xl font-Poppins px-2 py-1 font-medium">
        Projects
      </div>
      <div className="mx-5">
        {Projects.map((item, index) => {
          return <ProjectComp key={index} item={item} />;
        })}
      </div>
      <a
        className="mx-5 text-5xl py-10 cursor-pointer flex items-center gap-5 text-white"
        href="https://github.com/Dhruv883"
        target="_blank"
      >
        <span>View All</span>
        <img src="/icons/arrowLink.svg" alt="" width={55} className="pt-4" />
      </a>
    </div>
  );
};

export default page;
