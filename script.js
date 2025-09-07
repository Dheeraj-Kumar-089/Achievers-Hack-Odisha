// Background slideshow
let slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000); // change every 5s

// Particle effect (simple fireflies)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 60; // more particles

// Create particles
for (let i = 0; i < numParticles; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2
  });
}

// Draw particles (yellow glowing dots)
function drawParticles() {
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 215, 0, 0.8)"; // golden glow
    ctx.fill();
  });
}

// Draw connecting lines
function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) { // threshold for line
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 215, 0, 0.2)";
        ctx.lineWidth = 1;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

// Update particle positions
function updateParticles() {
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
}

// Animate everything
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawParticles();
  connectParticles();
  updateParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Handle resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// GSAP Animations
        gsap.from(".animate-hero", {
            duration: 1.8,
            y: 80,
            opacity: 0,
            ease: "power4.out",
            stagger: 0.2
        });

        gsap.utils.toArray(".section").forEach((section, i) => {
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

        gsap.from("nav a", {
            duration: 1,
            y: -30,
            opacity: 0,
            stagger: 0.15,
            ease: "power2.out"
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
