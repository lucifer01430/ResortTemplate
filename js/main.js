// Sticky Header Logic
window.addEventListener('scroll', function () {
  const header = document.querySelector('.main-header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Parallax
gsap.to('.hero-section', {
  backgroundPosition: "50% 100px",
  ease: "none",
  scrollTrigger: {
      trigger: '.hero-section',
      start: "top top",
      end: "bottom top",
      scrub: true
  }
});

// Section Animations
gsap.utils.toArray(".section-padding").forEach(section => {
  gsap.from(section, {
      scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out"
  });
});

// Room Cards Hover Animation
gsap.utils.toArray(".room-card").forEach(card => {
  card.addEventListener('mouseenter', () => {
      gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          duration: 0.4,
          ease: "power2.out"
      });
  });
  card.addEventListener('mouseleave', () => {
      gsap.to(card, {
          scale: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          duration: 0.4,
          ease: "power2.out"
      });
  });
});

// Amenity Cards Animation
gsap.utils.toArray(".amenity-card").forEach(card => {
  gsap.from(card, {
      scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
  });
});

// Swiper Initialization
new Swiper(".testimonial-swiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

// AOS Initialization
AOS.init({
  once: true,
  duration: 1200,
  easing: 'ease-out-cubic'
});