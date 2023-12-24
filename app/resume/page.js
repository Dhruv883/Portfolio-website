"use client";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-darkPurple text-white font-BigShoulder tracking-widest">
      <Navbar />
      <div className="h-screen flex items-center justify-center px-3 md:px-10 pt-28">
        <iframe
          src="https://drive.google.com/file/d/1uP5LzXzVgA_NpYSYIxXWN6vlXMCTlAtj/preview"
          allow="autoplay"
          allowtransparency="true"
          frameborder="0"
          className="w-screen md:w-2/3 h-full bg-darkPurple border-none outline-none"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
