import { useState } from "react";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      to: "#home",
      icon: "home",
    },
    {
      name: "About",
      to: "#about",
      icon: "about",
    },
    {
      name: "Skills",
      to: "#skills",
      icon: "skills",
    },
    {
      name: "Projects",
      to: "#projects",
      icon: "projects",
    },
    {
      name: "Resume",
      to: "#resume",
      icon: "resume",
    },
    {
      name: "Contact",
      to: "#contact",
      icon: "contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="px-5 border-b border-b-[#262626] overflow-hidden">
      {/* PC Navbar */}
      <div className="flex items-center justify-between w-full ">
        <div>
          <img src="/logo/logo-name.png" alt="" className="w-36" />
        </div>
        <div className="gap-7 px-5 mt-3 hidden md:flex">
          {menu.map((item, index) => {
            return (
              <a
                href={item.to}
                key={index}
                className="text-yellow text-2xl cursor-pointer font-BigShoulder tracking-wider border-b-2 border-transparent hover:border-b-yellow px-1 transition-all duration-500 ease-in-out"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="md:hidden mt-3">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <img src="/icons/cross.svg" alt="" />
            ) : (
              <img src="/icons/hamburger.svg" alt="" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showMenu && (
        <div className="w-full h-full p-2">
          <div className="md:hidden flex flex-col gap-2">
            {menu.map((item, index) => {
              return (
                <span className="flex items-center gap-5">
                  <span className="w-14 flex justify-center">
                    <img src={`/icons/${item.icon}.svg`} alt="" />
                  </span>
                  <a
                    href={item.to}
                    key={index}
                    className="text-yellow text-4xl cursor-pointer font-BigShoulder tracking-wider py-2"
                  >
                    {item.name}
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
