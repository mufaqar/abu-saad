"use client";
import "../public/assets/main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BacktoTop from "@/components/common/BacktoTop";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    const updateSpacerHeights = () => {
      let mode = "desktop";
      if (window.matchMedia("(max-width: 991px)").matches) mode = "mobile";
      if (window.matchMedia("(max-width: 767px)").matches) mode = "smobile";

      document.querySelectorAll(".themesflat-spacer").forEach((el) => {
        const height =
          mode === "desktop"
            ? el.dataset.desktop
            : mode === "mobile"
            ? el.dataset.mobile
            : el.dataset.smobile;

        el.style.height = `${height}px`;
      });
    };

    window.addEventListener("load", updateSpacerHeights);
    window.addEventListener("resize", updateSpacerHeights);
    updateSpacerHeights();

    return () => {
      window.removeEventListener("load", updateSpacerHeights);
      window.removeEventListener("resize", updateSpacerHeights);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("#site-header-wrap #site-header");
      if (header) {
        if (window.scrollY >= 100) {
          header.classList.add("is-fixed");
        } else {
          header.classList.remove("is-fixed");
        }
        if (window.scrollY >= 200) {
          header.classList.add("is-small");
        } else {
          header.classList.remove("is-small");
        }
      }
    });
  }, []);
  // is-fixed is-small
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/owlcarousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/owlcarousel/assets/owl.theme.default.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        <BacktoTop />
      </body>
    </html>
  );
}
