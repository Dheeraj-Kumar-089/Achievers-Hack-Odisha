 // GSAP Animations
    gsap.utils.toArray(".heritage-card").forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reset"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 90%"
      },
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "back.out(1.7)"
    });
    
  const markers = document.querySelectorAll(".marker");
  const tooltip = document.getElementById("tooltip");

  markers.forEach(marker => {
    marker.addEventListener("mouseenter", () => {
      tooltip.innerHTML = `<strong>${marker.dataset.title}</strong><br>${marker.dataset.info}`;
      tooltip.style.top = marker.offsetTop + "px";
      tooltip.style.left = marker.offsetLeft + "px";
      tooltip.style.opacity = "1";
    });

    marker.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });

