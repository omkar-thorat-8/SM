/**
 * SM INFOTECH - PREMIUM INTERACTIVE SCRIPTS
 * Advanced animations and interactions using GSAP
 */

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = [];

if (window.innerWidth > 768 && cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('glass-nav');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('glass-nav');
    navbar.classList.add('bg-transparent');
  }
  
  lastScroll = currentScroll;
});

// Active Navigation Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
    link.style.color = '#8b5cf6';
  }
});

// Reveal Animations
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

revealElements.forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      once: true
    },
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out'
  });
});

// Stagger Animations for Lists
const staggerContainers = document.querySelectorAll('.stagger-container');

staggerContainers.forEach(container => {
  const children = container.children;
  gsap.from(children, {
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      once: true
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'));
  const duration = 2;
  
  ScrollTrigger.create({
    trigger: counter,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        innerHTML: target,
        duration: duration,
        snap: { innerHTML: 1 },
        ease: 'power2.out',
        onUpdate: function() {
          counter.innerHTML = Math.ceil(this.targets()[0].innerHTML);
        }
      });
    }
  });
});

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero-parallax');
if (heroSection) {
  gsap.to('.parallax-bg', {
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 200,
    ease: 'none'
  });
}

// Magnetic Button Effect
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 },
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  });
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      // Animate hero elements after load
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });
    }, 500);
  }
});

// Form Validation Animation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    
    inputs.forEach(input => {
      if (!input.value) {
        valid = false;
        gsap.to(input, {
          x: [-10, 10, -10, 10, 0],
          duration: 0.5,
          ease: 'power2.out'
        });
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '';
      }
    });
    
    if (!valid) e.preventDefault();
  });
});

// Intersection Observer for simpler animations (fallback)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.observe').forEach(el => observer.observe(el));

// Console greeting
console.log('%cSM Infotech', 'font-size: 24px; font-weight: bold; color: #8b5cf6;');
console.log('%cPremium Corporate Website Loaded', 'font-size: 14px; color: #06b6d4;');