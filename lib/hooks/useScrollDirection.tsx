import { useEffect, useState } from "react";

// An Hook that changes the header dynamically whenever the scroll changes.

export default function useScrollDirection() {
  const [noScroll, setNoScroll] = useState(false);
  useEffect(() => {
    let lastScrollTop = 0;

    const updateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.getElementById("header");
      const headerChild = document.getElementById("headerChild");

      if (scrollTop > lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          setNoScroll(false);
          header.style.top = "-20vh";

          headerChild.style.backgroundColor = "transparent";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop < lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          setNoScroll(false);
          header.style.top = "0";

          headerChild.style.backgroundColor = "#F7F1EC";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop === 0) {
        setNoScroll(true);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", updateScrollPosition);
    // window.addEventListener("touchstart", updateScrollPosition);
    // window.addEventListener("touchmove", updateScrollPosition);
    // window.addEventListener("touchend", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      // window.removeEventListener("touchstart", updateScrollPosition);
      // window.removeEventListener("touchmove", updateScrollPosition);
      // window.removeEventListener("touchend", updateScrollPosition);
    };
  });

  return noScroll;
}
