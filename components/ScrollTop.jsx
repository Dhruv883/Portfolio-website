import { useState } from "react";

const ScrollTop = () => {
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
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <a
      className={`fixed bottom-7 right-7 z-40 p-2 rounded-lg bg-purple ${
        visible ? "flex" : "hidden"
      }`}
      id="myButton"
      onClick={scrollToTop}
    >
      <img src="/icons/up.svg" alt="" />
    </a>
  );
};

export default ScrollTop;
