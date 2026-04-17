import { translations } from './translations.js';

/* -------------------------------------------------------
   Internationalization (i18n) Logic
   ------------------------------------------------------- */
let currentLang = localStorage.getItem('lastFlagLang') || 'es';

function updateContent(lang) {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // If it has HTML tags, use innerHTML
      if (translations[lang][key].includes('<')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update button states
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update trigger text
  const trigger = document.querySelector('.lang-trigger');
  if (trigger) {
    trigger.textContent = lang.toUpperCase();
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  updateContent(currentLang);

  // Add event listeners to language options
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('lastFlagLang', currentLang);
      updateContent(currentLang);
    });
  });
});

/* -------------------------------------------------------
   YouTube IFrame API – video background for hero section
   Video: Last Flag | Gameplay Reveal - Gamescom 2025
   Channel: @PlayLastFlag
   ------------------------------------------------------- */

// Load YouTube IFrame API script dynamically
const ytScript = document.createElement('script');
ytScript.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(ytScript);

// Called automatically by the YouTube IFrame API once it's ready
window.onYouTubeIframeAPIReady = function () {
  new YT.Player('yt-player', {
    // Last Flag gameplay video (provided by user)
    videoId: 'WlPjdQWUGUg',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      playsinline: 1,
      // Loop requires playlist = videoId
      playlist: 'WlPjdQWUGUg',
    },
    events: {
      onReady: function (e) {
        e.target.playVideo();
        // Fade the video in once it starts playing, hide the fallback image
        document.getElementById('hero-video-wrap').classList.add('ready');
        document.getElementById('hero-fallback').style.opacity = '0';
      },
      onError: function () {
        // If video fails, keep the static fallback hero image visible
        document.getElementById('hero-fallback').style.opacity = '1';
      }
    }
  });
};

// -------------------------------------------------------
// Navbar scroll effect
// -------------------------------------------------------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// -------------------------------------------------------
// Scroll-triggered animate-up effect
// -------------------------------------------------------
const animateElements = document.querySelectorAll('.animate-up');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
animateElements.forEach(el => observer.observe(el));

// -------------------------------------------------------
// Mobile Menu Toggle
// -------------------------------------------------------
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}
