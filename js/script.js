// Scroll reveal animations — runs first and has its own fallback so a
// failure anywhere else in this file never leaves content permanently
// invisible (the .reveal CSS starts everything at opacity: 0).
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
);
revealItems.forEach((item) => revealObserver.observe(item));

// Safety net: force-reveal anything the observer hasn't caught after 2s
// (slow devices, elements inside hidden ancestors, etc.)
setTimeout(() => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}, 2000);

// Header shadow + back-to-top visibility on scroll
const header = document.getElementById("siteHeader");
const scrollTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  header.classList.toggle("scrolled", scrolled);
  scrollTopBtn.classList.toggle("visible", scrolled);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

function closeMenu() {
  hamburger.classList.remove("active");
  mainNav.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const isActive = mainNav.classList.toggle("active");
  hamburger.classList.toggle("active", isActive);
  hamburger.setAttribute("aria-expanded", String(isActive));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// FAQ accordion
document.querySelectorAll(".accordion-item").forEach((item) => {
  const trigger = item.querySelector(".accordion-trigger");
  trigger.addEventListener("click", () => {
    const isOpen = item.getAttribute("data-open") === "true";
    item.setAttribute("data-open", String(!isOpen));
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
});

// Testimonials carousel (native scroll-snap + prev/next buttons)
const track = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("testimonialPrev");
const nextBtn = document.getElementById("testimonialNext");

function scrollByCard(direction) {
  const card = track.querySelector(".testimonial-card");
  if (!card) return;
  const cardWidth = card.getBoundingClientRect().width + 20; // + gap
  track.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => scrollByCard(-1));
nextBtn.addEventListener("click", () => scrollByCard(1));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
