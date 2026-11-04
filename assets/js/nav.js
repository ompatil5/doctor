document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Drawer
  var mobileToggle = document.querySelector(".mobile-nav-toggle"),
      mobileDrawer = document.querySelector(".mobile-drawer");

  if (mobileToggle && mobileDrawer) {
    function closeMobileMenu() {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileDrawer.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    mobileToggle.addEventListener("click", function (evt) {
      evt.stopPropagation();
      var isOpen = "true" === mobileToggle.getAttribute("aria-expanded");
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileToggle.setAttribute("aria-expanded", "true");
        mobileDrawer.classList.add("is-open");
        document.body.style.overflow = "hidden";
      }
    });

    document.addEventListener("keydown", function (evt) {
      if ("Escape" === evt.key && mobileDrawer.classList.contains("is-open")) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });

    mobileDrawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMobileMenu();
      });
    });

    document.addEventListener("click", function (evt) {
      if (mobileDrawer.classList.contains("is-open") &&
          !mobileDrawer.contains(evt.target) &&
          !mobileToggle.contains(evt.target)) {
        closeMobileMenu();
      }
    });

    mobileDrawer.querySelectorAll(".mobile-dropdown-btn").forEach(function (btn) {
      btn.addEventListener("click", function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var isExpanded = "true" === btn.getAttribute("aria-expanded"),
            targetId = btn.getAttribute("aria-controls"),
            targetList = targetId ? document.getElementById(targetId) : btn.nextElementSibling;
        if (isExpanded) {
          btn.setAttribute("aria-expanded", "false");
          if (targetList) targetList.setAttribute("hidden", "");
        } else {
          btn.setAttribute("aria-expanded", "true");
          if (targetList) targetList.removeAttribute("hidden");
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1180 && mobileDrawer.classList.contains("is-open")) {
        closeMobileMenu();
      }
    });
  }

  // Desktop Navigation Dropdowns
  var dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  dropdownItems.forEach(function (item) {
    var link = item.querySelector(".nav-link"),
        menu = item.querySelector(".dropdown-menu"),
        closeTimer = null;

    if (!link || !menu) return;

    function openDropdown() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      dropdownItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
          var otherLink = otherItem.querySelector(".nav-link");
          if (otherLink) otherLink.setAttribute("aria-expanded", "false");
        }
      });
      link.setAttribute("aria-expanded", "true");
      item.classList.add("is-open");
    }

    function scheduleCloseDropdown() {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        link.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
      }, 180);
    }

    // Hover listeners with grace period
    item.addEventListener("mouseenter", openDropdown);
    item.addEventListener("mouseleave", scheduleCloseDropdown);

    // Click on parent link
    link.addEventListener("click", function (evt) {
      var isExpanded = "true" === link.getAttribute("aria-expanded");
      if (!isExpanded) {
        evt.preventDefault();
        openDropdown();
      }
    });

    // Close when clicking an item inside the dropdown
    menu.querySelectorAll(".dropdown-item").forEach(function (dropLink) {
      dropLink.addEventListener("click", function () {
        link.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
      });
    });

    // Accessible keyboard navigation
    item.addEventListener("keydown", function (evt) {
      var links = Array.from(menu.querySelectorAll("a")),
          isExpanded = "true" === link.getAttribute("aria-expanded");

      if ("ArrowDown" === evt.key) {
        evt.preventDefault();
        if (isExpanded) {
          var currentIndex = links.indexOf(document.activeElement);
          if (currentIndex < links.length - 1) {
            links[currentIndex + 1].focus();
          } else {
            links[0].focus();
          }
        } else {
          openDropdown();
          if (links.length) links[0].focus();
        }
      } else if ("ArrowUp" === evt.key) {
        if (isExpanded) {
          evt.preventDefault();
          var currentIndex = links.indexOf(document.activeElement);
          if (currentIndex > 0) {
            links[currentIndex - 1].focus();
          } else {
            link.focus();
            scheduleCloseDropdown();
          }
        }
      } else if ("Escape" === evt.key && isExpanded) {
        evt.preventDefault();
        link.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
        link.focus();
      }
    });

    // Close when focus leaves the dropdown completely
    item.addEventListener("focusout", function (evt) {
      if (!item.contains(evt.relatedTarget)) {
        scheduleCloseDropdown();
      }
    });
  });

  // Global click outside to dismiss open dropdowns
  document.addEventListener("click", function (evt) {
    if (!evt.target.closest(".nav-item.has-dropdown")) {
      dropdownItems.forEach(function (item) {
        item.classList.remove("is-open");
        var link = item.querySelector(".nav-link");
        if (link) link.setAttribute("aria-expanded", "false");
      });
    }
  });

  // Local file:// protocol link resolver
  if ("file:" === window.location.protocol) {
    document.addEventListener("click", function (evt) {
      var anchor = evt.target.closest("a");
      if (anchor) {
        var href = anchor.getAttribute("href");
        if (href &&
            !href.startsWith("http:") &&
            !href.startsWith("https:") &&
            !href.startsWith("//") &&
            !href.startsWith("tel:") &&
            !href.startsWith("mailto:") &&
            !href.startsWith("#") &&
            !href.startsWith("javascript:")) {
          if ("" === href || "./" === href) {
            evt.preventDefault();
            window.location.href = "index.html";
          } else if ("../" === href) {
            evt.preventDefault();
            window.location.href = "../index.html";
          } else if ("../../" === href) {
            evt.preventDefault();
            window.location.href = "../../index.html";
          } else if (href.endsWith("/")) {
            evt.preventDefault();
            window.location.href = href + "index.html";
          }
        }
      }
    });
  }
});