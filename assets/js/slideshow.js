/* ==========================================================================
   Dr. Firdous Shaikh - About Section Photo Slideshow
   Auto-advances images every 3 seconds with accessible pause/controls
   ========================================================================== */

(function () {
  'use strict';

  function initSlideshow() {
    const slider = document.getElementById('aboutSlideshow');
    if (!slider) return;

    const slides = slider.querySelectorAll('.about-slide');
    if (!slides || slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const intervalTime = parseInt(slider.getAttribute('data-interval'), 10) || 3000;

    const counterCur = slider.querySelector('.current-slide');
    const counterTotal = slider.querySelector('.total-slides');
    const prevBtn = slider.querySelector('.about-slideshow-btn.prev');
    const nextBtn = slider.querySelector('.about-slideshow-btn.next');
    const pauseBtn = slider.querySelector('.about-slideshow-pause');

    if (counterTotal) counterTotal.textContent = slides.length;

    function showSlide(index) {
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      slides.forEach(function (slide, idx) {
        if (idx === index) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      currentIndex = index;
      if (counterCur) counterCur.textContent = currentIndex + 1;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      if (!isPaused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        timer = setInterval(nextSlide, intervalTime);
      }
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function togglePause() {
      isPaused = !isPaused;
      if (pauseBtn) {
        pauseBtn.setAttribute('aria-pressed', isPaused ? 'true' : 'false');
        pauseBtn.setAttribute('aria-label', isPaused ? 'Resume slideshow' : 'Pause slideshow');
        const iconPause = pauseBtn.querySelector('.icon-pause');
        const iconPlay = pauseBtn.querySelector('.icon-play');
        if (iconPause && iconPlay) {
          iconPause.style.display = isPaused ? 'none' : 'inline';
          iconPlay.style.display = isPaused ? 'inline' : 'none';
        }
      }
      if (isPaused) {
        stopTimer();
      } else {
        startTimer();
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
        if (!isPaused) startTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
        if (!isPaused) startTimer();
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', function (e) {
        e.preventDefault();
        togglePause();
      });
    }

    // Pause on hover
    slider.addEventListener('mouseenter', function () {
      if (!isPaused) stopTimer();
    });

    slider.addEventListener('mouseleave', function () {
      if (!isPaused) startTimer();
    });

    // Touch swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].clientX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        if (!isPaused) startTimer();
      }
    }, { passive: true });

    // Keyboard support when focused
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        nextSlide();
        if (!isPaused) startTimer();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        if (!isPaused) startTimer();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        togglePause();
      }
    });

    // Start auto changing
    startTimer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlideshow);
  } else {
    initSlideshow();
  }
})();
