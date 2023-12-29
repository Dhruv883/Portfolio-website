import { useState } from "react";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      to: "/#home",
      icon: "home",
    },
    // {
    //   name: "About",
    //   to: "/#about",
    //   icon: "about",
    // },
    {
      name: "Skills",
      to: "/#skills",
      icon: "skills",
    },
    {
      name: "Projects",
      to: "/#projects",
      icon: "projects",
    },
    {
      name: "Resume",
      to: "/resume",
      icon: "resume",
    },
    {
      name: "Contact",
      to: "/#contact",
      icon: "contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="px-5 py-1 fixed left-0 top-0 right-0 bg-darkPurple overflow-hidden z-50">
      {/* PC Navbar */}
      <div className="flex items-center justify-between w-full ">
        <div>
          <img src="/logo/logo-name.png" alt="" className="w-36" />
        </div>
        <div className="gap-7 px-5 mt-1 hidden md:flex">
          {menu.map((item, index) => {
            return (
              <a
                href={item.to}
                key={index}
                className="text-white hover:text-purple text-lg cursor-pointer font-Poppins px-1 transition-all duration-300 ease-in-out"
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
        <div className="md:hidden w-full p-2 h-screen md:h-auto">
          <div className="flex flex-col gap-2">
            {menu.map((item, index) => {
              return (
                <button
                  className="flex items-center gap-5"
                  key={index}
                  onClick={toggleMenu}
                >
                  <span className="w-14 flex justify-center">
                    <img src={`/icons/${item.icon}.svg`} alt="" />
                  </span>
                  <a
                    href={item.to}
                    key={index}
                    className="text-purple text-4xl font-medium cursor-pointer font-Poppins py-2"
                  >
                    {item.name}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
