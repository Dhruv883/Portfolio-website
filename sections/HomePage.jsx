import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div
      className="border-b border-red-500 min-h-screen bg-darkPurple text-white font-BigShoulder tracking-widest"
      id="home"
    >
      <Navbar />
      <div className="h-screen flex items-center justify-between md:px-14">
        <div className="hidden md:flex">
          <img src="/icons/developer2.svg" alt="" />
        </div>
        <div className="">
          <div className="text-purple text-9xl font-semibold text-center py-2">
            Dhruv Dedhia
          </div>
          <div className="text-6xl font-semibold text-center py-1">
            Full Stack Developer
          </div>
          <div>Links</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
