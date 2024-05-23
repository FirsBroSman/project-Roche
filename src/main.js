gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".madame-roche",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".madame-roche",
        start: "center",
        end: "750",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".asian-woman-and-watermark",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".asian-woman-and-watermark",
        start: "center",
        end: "400",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".group-of-woman",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".group-of-woman",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".madame-roche",
    { x: -500, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".madame-roche",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".asian-woman-and-watermark",
    { x: 500, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".asian-woman-and-watermark",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".group-of-woman",
    { x: -500, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".group-of-woman",
        scrub: true,
      },
    }
  );
}
