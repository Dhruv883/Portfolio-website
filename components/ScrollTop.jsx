import { useState } from "react";

const ScrollTop = () => {
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // const scrollFunction = () => {
  //   const mybutton = document.getElementById("myButton");
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // };

  // const scrollTop = () => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={`fixed border-2 border-[#262626] bottom-7 right-7 z-40 p-2 rounded-lg bg-bgColor ${
        visible ? "flex" : "hidden"
      }`}
      id="myButton"
      onClick={scrollToTop}
    >
      <img src="/icons/up.svg" alt="" srcset="" />
    </button>
  );
};

export default ScrollTop;
