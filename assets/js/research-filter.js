/**
 * Research and Publications Category / Theme Filter
 * Dr. Firdous Shaikh | Diabetologist & Metabolic Specialist
 */
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.research-card');

  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active state
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      // Filter items
      items.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          var categories = (item.getAttribute('data-category') || '').split(' ');
          if (categories.indexOf(filter) !== -1) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });

      // Automatically open accordion sections or toggle academic sections containing matching items
      if (filter !== 'all') {
        document.querySelectorAll('.research-list details').forEach(function (details) {
          var hasVisible = details.querySelector('.research-card:not([style*="display: none"])');
          if (hasVisible) {
            details.open = true;
          }
        });
      }

      // Show/hide academic sections based on visible cards
      document.querySelectorAll('.academic-section').forEach(function (sec) {
        if (filter === 'all') {
          sec.style.display = '';
        } else {
          var cards = sec.querySelectorAll('.research-card');
          if (cards.length > 0) {
            var hasVisible = sec.querySelector('.research-card:not([style*="display: none"])');
            sec.style.display = hasVisible ? '' : 'none';
          }
        }
      });
    });
  });
});
