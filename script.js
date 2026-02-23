// ==========================================
// FreshNet Cleaning Company - JavaScript
// ==========================================


// ------------------------------------------
// 1. NAVBAR: Add shadow when user scrolls down
// ------------------------------------------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ------------------------------------------
// 2. HAMBURGER MENU: Toggle mobile nav open/close
// ------------------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ------------------------------------------
// 3. SCROLL REVEAL: Animate elements into view
//    as the user scrolls down the page
// ------------------------------------------
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Slight stagger delay so multiple elements animate one after another
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);

      // Stop observing once element is visible
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12 // Trigger when 12% of element is visible
});

revealElements.forEach(el => revealObserver.observe(el));