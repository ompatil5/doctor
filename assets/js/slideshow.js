/* ==========================================================================
   Dr. Firdous Shaikh - About Section Photo Slideshow
   Auto-advances images every 3 seconds with horizontal dash indicator pattern
   ========================================================================== */

(function () {
  'use strict';

  function initSlideshow() {
    const slider = document.getElementById('aboutSlideshow');
    if (!slider) return;

    const slides = slider.querySelectorAll('.about-slide');
    const indicators = slider.querySelectorAll('.about-slideshow-indicator');
    if (!slides || slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const intervalTime = parseInt(slider.getAttribute('data-interval'), 10) || 3000;

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

      indicators.forEach(function (ind, idx) {
        if (idx === index) {
          ind.classList.add('active');
          ind.setAttribute('aria-selected', 'true');
        } else {
          ind.classList.remove('active');
          ind.setAttribute('aria-selected', 'false');
        }
      });

      currentIndex = index;
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

    // Indicator click navigation
    indicators.forEach(function (indicator, idx) {
      indicator.addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(idx);
        if (!isPaused) startTimer();
      });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', function () {
      if (!isPaused) stopTimer();
    });

    slider.addEventListener('mouseleave', function () {
      if (!isPaused) startTimer();
    });

    // Pause on focus within (accessibility)
    slider.addEventListener('focusin', function () {
      if (!isPaused) stopTimer();
    });

    slider.addEventListener('focusout', function (e) {
      if (!slider.contains(e.relatedTarget) && !isPaused) {
        startTimer();
      }
    });

    // Touch swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    slider.addEventListener('touchstart', function (e) {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].clientX;
      }
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      if (e.changedTouches && e.changedTouches.length > 0) {
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
