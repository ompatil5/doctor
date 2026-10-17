/**
 * Gallery & Lightbox Viewer
 * Dr. Firdous Shaikh — Diabetologist & Metabolic Specialist
 * Plain Vanilla JavaScript — Zero dependencies
 */

(function () {
  'use strict';

  function initGallery() {
    const gridEl = document.getElementById('gallery-grid');
    if (!gridEl || !window.GALLERY_ITEMS) return;

    const prefix = gridEl.getAttribute('data-asset-prefix') || '';
    const searchInput = document.getElementById('gallery-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const statusCountEl = document.getElementById('gallery-count-text');

    // Lightbox Elements
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxBadge = document.getElementById('lightbox-badge');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOrigLink = document.getElementById('lightbox-orig-link');

    let currentFilter = 'all';
    let searchQuery = '';
    let filteredItems = [...window.GALLERY_ITEMS];
    let currentIndex = 0;

    // Update count chips in filter buttons
    const counts = { all: window.GALLERY_ITEMS.length, conferences: 0, camps: 0, awards: 0, education: 0 };
    window.GALLERY_ITEMS.forEach(it => {
      if (counts[it.cat] !== undefined) counts[it.cat]++;
    });

    filterBtns.forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const countSpan = btn.querySelector('.filter-count');
      if (countSpan && counts[cat] !== undefined) {
        countSpan.textContent = counts[cat];
      }
    });

    function renderGallery() {
      // Filter items
      filteredItems = window.GALLERY_ITEMS.filter(it => {
        const matchesCat = currentFilter === 'all' || it.cat === currentFilter;
        const matchesQuery = !searchQuery || 
          it.title.toLowerCase().includes(searchQuery) ||
          it.desc.toLowerCase().includes(searchQuery) ||
          it.badge.toLowerCase().includes(searchQuery);
        return matchesCat && matchesQuery;
      });

      // Update status text
      if (statusCountEl) {
        statusCountEl.textContent = `Showing ${filteredItems.length} of ${window.GALLERY_ITEMS.length} photos`;
      }

      if (filteredItems.length === 0) {
        gridEl.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--surface); border: 1px dashed var(--line); border-radius: var(--radius);">
            <p style="font-family: var(--font-head); font-size: 1.25rem; color: var(--green-900); margin-bottom: 0.5rem;">No matching photographs found</p>
            <p style="color: var(--muted); font-size: 0.9rem;">Try selecting a different category or clearing your search term.</p>
          </div>
        `;
        return;
      }

      // Render cards
      let html = '';
      filteredItems.forEach((it, idx) => {
        const webpSrc = `${prefix}assets/img/gallery/${it.webp}`;
        const jpegSrc = `${prefix}assets/images/gallery/${it.jpeg}`;

        html += `
          <article class="gallery-card" data-index="${idx}" tabindex="0" role="button" aria-label="View photo: ${escapeHtml(it.title)}">
            <div class="gallery-img-container">
              <picture>
                <source srcset="${webpSrc}" type="image/webp">
                <img src="${jpegSrc}" alt="${escapeHtml(it.title)} - Dr. Firdous Shaikh Mumbai" width="${it.w}" height="${it.h}" loading="lazy">
              </picture>
              <div class="gallery-overlay" aria-hidden="true">
                <span class="gallery-overlay-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  View High-Res Photo
                </span>
              </div>
            </div>
            <div class="gallery-card-body">
              <span class="gallery-card-badge">${escapeHtml(it.badge)}</span>
              <h3 class="gallery-card-title">${escapeHtml(it.title)}</h3>
              <p class="gallery-card-desc">${escapeHtml(it.desc)}</p>
            </div>
          </article>
        `;
      });

      gridEl.innerHTML = html;

      // Attach click events
      gridEl.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(idx);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const idx = parseInt(card.getAttribute('data-index'), 10);
            openLightbox(idx);
          }
        });
      });
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    // Filter Button Handler
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderGallery();
      });
    });

    // Search Input Handler
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderGallery();
      });
    }

    // Lightbox logic
    function openLightbox(idx) {
      if (!filteredItems[idx]) return;
      currentIndex = idx;
      updateLightboxContent();
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
    }

    function updateLightboxContent() {
      const item = filteredItems[currentIndex];
      if (!item) return;

      const webpSrc = `${prefix}assets/img/gallery/${item.webp}`;
      const origJpegSrc = `${prefix}assets/images/gallery/${item.jpeg}`;

      lightboxImg.src = webpSrc;
      lightboxImg.alt = item.title;
      lightboxCounter.textContent = `Photo ${currentIndex + 1} of ${filteredItems.length}`;
      if (lightboxBadge) lightboxBadge.textContent = item.badge;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;

      if (lightboxOrigLink) {
        lightboxOrigLink.href = origJpegSrc;
      }
    }

    function showPrev() {
      if (filteredItems.length === 0) return;
      currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      updateLightboxContent();
    }

    function showNext() {
      if (filteredItems.length === 0) return;
      currentIndex = (currentIndex + 1) % filteredItems.length;
      updateLightboxContent();
    }

    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-dialog')) {
          closeLightbox();
        }
      });
    }

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    });

    // Initial render
    renderGallery();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
