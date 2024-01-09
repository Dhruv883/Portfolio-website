"use client";
import { useEffect, useState } from "react";

import Preloader from "@/components/Preloader";
import ScrollTop from "@/components/ScrollTop";
import Navbar from "@/components/Navbar";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import HomePage from "@/sections/HomePage";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <div className="bg-darkPurple">
      <Preloader />
      <Navbar />
      {show && (
        <>
          <HomePage />
          <Skills />
          <Projects />
          <Contact />
          <ScrollTop />
        </>
      )}
    </div>
  );
}
