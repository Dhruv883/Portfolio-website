"use client";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const page = () => {
  return (
    <div className="min-h-screen bg-darkPurple ">
      <Preloader />
      <Navbar />
      <div className="h-screen flex items-center justify-center px-3 md:px-10 pt-28">
        <iframe
          src="https://drive.google.com/file/d/1H_3FLlCjo7lSJr-vTmVN00OGI5FOKPsy/preview"
          allow="autoplay"
          allowtransparency="true"
          className="w-screen md:w-2/3 h-full bg-darkPurple border-none outline-none"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
