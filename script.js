// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

// Initial animation for page load
gsap.from("header h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("header p", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from("#cta-button", { duration: 1, scale: 0, ease: "back.out(1.7)", delay: 1 });
gsap.from(".box", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 1.5, stagger: 0.2 });

// Click animation for the button
document.getElementById('cta-button').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');

  // Create a GSAP timeline
  const tl = gsap.timeline();

  // Add animations to the timeline
  tl.to(boxes[0], { duration: 1, x: 300, rotation: 360, ease: 'power2.inOut' })
    .to(boxes[1], { duration: 1, y: 200, scale: 1.5, ease: 'power2.inOut' }, "-=0.5")
    .to(boxes[2], { duration: 1, x: -300, rotation: -360, ease: 'power2.inOut' }, "-=0.5")
    .to(boxes[0], { duration: 1, x: 0, rotation: 0, ease: 'power2.inOut' })
    .to(boxes[1], { duration: 1, y: 0, scale: 1, ease: 'power2.inOut' }, "-=0.5")
    .to(boxes[2], { duration: 1, x: 0, rotation: 0, ease: 'power2.inOut' }, "-=0.5");

  // Trigger confetti animation
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// Scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".scroll-section h2", {
  scrollTrigger: {
    trigger: ".scroll-section h2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "restart none none none",
    repeat: -1,
    repeatRefresh: true
  },
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#animated-svg circle", {
  scrollTrigger: {
    trigger: "#animated-svg",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "restart none none none",
    repeat: -1,
    repeatRefresh: true
  },
  strokeDasharray: 251.2,
  strokeDashoffset: 251.2,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from(".shape", {
  scrollTrigger: {
    trigger: ".shape-container",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "restart none none none",
    repeat: -1,
    repeatRefresh: true
  },
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2
});

gsap.to(".img", {
  scrollTrigger: {
    trigger: ".img",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play none none none"
  },
  opacity: 1,
  duration: 2,
  ease: "power2.inOut"
});
