/**
 * Accessible Navigation: Mobile Drawer & Desktop Dropdowns
 * Dr. Firdous Shaikh — Diabetologist, Thyroid and Weight Management Physician
 */
document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile Drawer ---
  var toggle = document.querySelector('.mobile-nav-toggle');
  var drawer = document.querySelector('.mobile-drawer');

  if (toggle && drawer) {
    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close menu when a navigation link inside the drawer is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  // --- Accessible Desktop Dropdowns ---
  var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  dropdownItems.forEach(function (item) {
    var trigger = item.querySelector('.nav-link');
    var menu = item.querySelector('.dropdown-menu');

    if (!trigger || !menu) return;

    function openDropdown() {
      trigger.setAttribute('aria-expanded', 'true');
      menu.style.display = 'block';
    }

    function closeDropdown() {
      trigger.setAttribute('aria-expanded', 'false');
      menu.style.display = '';
    }

    // Toggle on trigger click (for touch and keyboard)
    trigger.addEventListener('click', function (e) {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      if (!expanded) {
        // If clicking to expand dropdown rather than navigate immediately
        e.preventDefault();
        openDropdown();
      }
    });

    // Keyboard support
    item.addEventListener('keydown', function (e) {
      var links = Array.from(menu.querySelectorAll('a'));
      var isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!isExpanded) {
          openDropdown();
          if (links.length) links[0].focus();
        } else {
          var activeIndex = links.indexOf(document.activeElement);
          if (activeIndex < links.length - 1) {
            links[activeIndex + 1].focus();
          } else {
            links[0].focus();
          }
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (isExpanded) {
          var activeIdx = links.indexOf(document.activeElement);
          if (activeIdx > 0) {
            links[activeIdx - 1].focus();
          } else {
            trigger.focus();
            closeDropdown();
          }
        }
      } else if (e.key === 'Escape') {
        if (isExpanded) {
          e.preventDefault();
          closeDropdown();
          trigger.focus();
        }
      }
    });

    // Close when focus leaves the dropdown component
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) {
        closeDropdown();
      }
    });

    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', closeDropdown);
  });
});
