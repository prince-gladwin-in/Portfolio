/* ==========================================================================
   Portfolio — Interactive Enhancements
   --------------------------------------------------------------------------
   1. Mobile hamburger menu toggle (with ARIA)
   2. Header scroll state (frosted background intensifies)
   3. Scroll-reveal animations (Intersection Observer)
   ========================================================================== */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     1. MOBILE MENU
     ----------------------------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      primaryNav.classList.toggle('is-open');
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when a nav link is clicked
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  /* -----------------------------------------------------------------------
     2. HEADER SCROLL STATE
     ----------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check initial state
  }

  /* -----------------------------------------------------------------------
     3. SCROLL-REVEAL (Intersection Observer)
     ----------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything if no IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
})();
