/**
 * Accessible Photo Gallery with Category Filters and Modal Lightbox
 * Dr. Firdous Shaikh — Diabetologist, Thyroid and Weight Management Physician
 */
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.gallery-filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var galleryLinks = document.querySelectorAll('.gallery-link');
  var lightbox = document.getElementById('gallery-lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var btnClose = document.getElementById('lightbox-close');
  var btnPrev = document.getElementById('lightbox-prev');
  var btnNext = document.getElementById('lightbox-next');

  var currentVisibleLinks = [];
  var currentIndex = 0;
  var lastActiveElement = null;

  function updateVisibleList() {
    currentVisibleLinks = [];
    galleryItems.forEach(function (item) {
      if (item.style.display !== 'none') {
        var link = item.querySelector('.gallery-link');
        if (link) currentVisibleLinks.push(link);
      }
    });
  }

  // Initial visible links
  updateVisibleList();

  // --- Category Filtering ---
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      galleryItems.forEach(function (item) {
        var group = item.getAttribute('data-group');
        if (filter === 'all' || group === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      updateVisibleList();
    });
  });

  // --- Lightbox Functions ---
  if (lightbox && lightboxImg && lightboxCaption) {
    function showImage(index) {
      if (currentVisibleLinks.length === 0) return;
      if (index < 0) index = currentVisibleLinks.length - 1;
      if (index >= currentVisibleLinks.length) index = 0;
      currentIndex = index;

      var link = currentVisibleLinks[currentIndex];
      var largeUrl = link.getAttribute('data-large') || link.getAttribute('href');
      var captionText = link.getAttribute('data-caption') || '';
      var altText = link.getAttribute('data-alt') || captionText;

      lightboxImg.src = largeUrl;
      lightboxImg.alt = altText;
      lightboxCaption.textContent = captionText;

      // Update counter if element exists
      var counter = document.getElementById('lightbox-counter');
      if (counter) {
        counter.textContent = (currentIndex + 1) + ' / ' + currentVisibleLinks.length;
      }
    }

    function openLightbox(link) {
      updateVisibleList();
      var idx = currentVisibleLinks.indexOf(link);
      if (idx === -1) idx = 0;
      lastActiveElement = document.activeElement;

      showImage(idx);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (btnClose) {
        btnClose.focus();
      }
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastActiveElement) {
        lastActiveElement.focus();
      }
    }

    // Attach click listeners to gallery links
    galleryLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(link);
      });
    });

    if (btnClose) {
      btnClose.addEventListener('click', closeLightbox);
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', function (e) {
        e.stopPropagation();
        showImage(currentIndex + 1);
      });
    }

    // Close when clicking outside image content
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-dialog')) {
        closeLightbox();
      }
    });

    // Keyboard navigation: Escape, Left, Right, Tab Trap
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showImage(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showImage(currentIndex + 1);
      } else if (e.key === 'Tab') {
        // Focus trap
        var focusable = lightbox.querySelectorAll('button:not([disabled]), [tabindex="0"]');
        var focusArr = Array.prototype.slice.call(focusable);
        if (focusArr.length === 0) return;

        var first = focusArr[0];
        var last = focusArr[focusArr.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }
});
