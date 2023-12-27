const HomePage = () => {
  const links = [
    {
      to: "https://github.com/Dhruv883",
      icon: "github",
    },
    {
      to: "https://www.linkedin.com/in/dhruv-dedhia0803/",
      icon: "linkedin",
    },
    {
      to: "https://twitter.com/Dhruv0883",
      icon: "twitter",
    },
    {
      to: "https://www.instagram.com/dhruv_0803/",
      icon: "instagram",
    },
  ];

  return (
    <div
      className="min-h-screen bg-darkPurple text-white font-Poppins"
      id="home"
    >
      <div className="h-screen flex items-center justify-center md:justify-between px-3 md:px-6 pt-10">
        <div className="hidden md:flex md:mt-10">
          <img src="/icons/coder.svg" alt="" />
        </div>
        <div className="md:mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <div>
            <div className="text-purple text-7xl lg:text-8xl font-semibold text-center py-2 md:mt-0">
              Dhruv Dedhia
            </div>
            <div className="text-4xl lg:text-5xl font-semibold text-center py-1">
              Full Stack Developer
            </div>

            <div className="flex justify-center gap-5 mt-4 tracking-tight">
              <a
                className="flex text-lg md:text-2xl items-center gap-2 bg-purple px-3 py-2 rounded-lg cursor-pointer"
                download
                href="/Dhruv_Dedhia-Resume.pdf"
              >
                <span>Resume</span>
                <img src="/icons/download.svg" alt="" className="pb-[5px]" />
              </a>
              <a
                className="flex text-lg md:text-2xl items-center gap-2 bg-purple px-3 py-2 rounded-lg cursor-pointer  "
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex md:flex-col items-center justify-center gap-5 md:mt-10 ml-4">
            {links.map((item, index) => {
              return (
                <span key={index}>
                  <a className="" href={item.to} target="_blank">
                    <img src={`/icons/${item.icon}.svg`} alt="" />
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
