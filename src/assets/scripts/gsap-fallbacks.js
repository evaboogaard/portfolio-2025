import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const supportsScrollDriven = CSS.supports("animation-timeline: view(y)");

if (!supportsScrollDriven) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#about",
    {
      skewX: 60,
      scale: 0,
    },
    {
      skewX: 0,
      scale: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 150%",
        end: "top 70%",
        scrub: true,
      },
    },
  );

  gsap.fromTo(
    ".hero-section__content",
    { skewY: 0, x: 0, y: 0 },
    {
      skewY: -14,
      x: "4rem",
      y: "20vh",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "bottom 50%",
        end: "bottom 10%",
        scrub: true,
        markers: true,
      },
    },
  );
  const projects = Array.from(document.querySelectorAll(".project"));

  projects.forEach((projectEl, index) => {
    const visual = projectEl.querySelector(".project__visual-image-container");
    const text = projectEl.querySelector(".project__text");
    const isEven = index % 2 === 1;

    if (visual) {
      if (isEven) {
        gsap.fromTo(
          visual,
          { rotationY: 15 },
          {
            rotationY: -15,
            ease: "none",
            scrollTrigger: {
              trigger: projectEl,
              start: "top 100%",
              end: "top 0%",
              scrub: true,
            },
          },
        );
      } else {
        gsap.fromTo(
          visual,
          { rotationY: -15 },
          {
            rotationY: 15,
            ease: "none",
            scrollTrigger: {
              trigger: projectEl,
              start: "top 100%",
              end: "top 0%",
              scrub: true,
            },
          },
        );
      }
    }

    if (text) {
      if (isEven) {
        projectEl.classList.add("is-even-fallback");
      } else {
        gsap.set(projectEl, { "--project-bg-pos": "0% 50%" });
        gsap.to(projectEl, {
          "--project-bg-pos": "100% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: projectEl,
            start: "top 110%",
            end: "top 40%",
            scrub: true,
          },
        });
      }
    }
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}
