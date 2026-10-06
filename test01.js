gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".masked-title",
  {
    maskPosition: "100% 50%",
    webkitMaskPosition: "100% 50%"
  },
  {
    maskPosition: "0% 50%",
    webkitMaskPosition: "0% 50%",
    duration: 1.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".masked-title",
      start: "top 80%",
      once: true
    }
  }
);