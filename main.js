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
