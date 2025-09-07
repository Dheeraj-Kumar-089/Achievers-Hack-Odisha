    gsap.from(".animate-hero", {
      duration: 1.8,
      y: 80,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2
    });

    gsap.utils.toArray(".heritage-section").forEach((section) => {
      gsap.from(section.querySelectorAll(".card"), {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reset"
        },
        duration: 1.2,
        y: 120,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out"
      });
    });

    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 90%"
      },
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)"
    });