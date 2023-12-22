"use client";

import Preloader from "@/components/Preloader";
import ScrollTop from "@/components/ScrollTop";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import HomePage from "@/sections/HomePage";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div className="bg-bgColor h-screen">
      {/* <Preloader /> */}
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <ScrollTop /> */}
    </div>
  );
}
