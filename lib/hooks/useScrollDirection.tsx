import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

// An Hook that changes the header dynamically whenever the scroll changes.

export default function useScrollDirection() {
  const [noScroll, setNoScroll] = useState(false);
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const updateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.getElementById("header");
      const headerChild = document.getElementById("headerChild");

      if (scrollTop > lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          setNoScroll(false);
          // header.style.top = "-20vh";

          // headerChild.style.backgroundColor = "transparent";
          headerChild.style.backgroundColor = "yellow";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop < lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          // setNoScroll(false);
          // header.style.top = "0";

          headerChild.style.backgroundColor = "#F7F1EC";
          // headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop === 0) {
        setNoScroll(true);
        if (headerChild) {
          headerChild.style.backgroundColor = "red";
        }
      }

      lastScrollTop = scrollTop;
    };

    const throttledUpdate = throttle(updateScrollPosition, (500));

    window.addEventListener("scroll", throttledUpdate);

    return () => {
      window.removeEventListener("scroll", throttledUpdate);
    };
  });

  return noScroll;
}
