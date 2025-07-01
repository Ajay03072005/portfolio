'use strict';

/**
 * SIDEBAR TOGGLE
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}

/**
 * PAGE NAVIGATION
 */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navLinks.length && pages.length) {
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active class from all links and pages
      navLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      // Activate clicked link
      this.classList.add("active");

      // Activate corresponding page
      const pageName = this.textContent.trim().toLowerCase();
      pages.forEach(page => {
        if (page.dataset.page === pageName) {
          page.classList.add("active");
          window.scrollTo(0, 0);
        }
      });
    });
  });
}

/**
 * OPTIONAL FILTER DROPDOWN - Defensive check
 */
const filterSelect = document.querySelector("[data-select]");
const filterItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

if (filterSelect && filterItems.length && selectValue) {
  filterSelect.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  filterItems.forEach(item => {
    item.addEventListener("click", function () {
      selectValue.innerText = this.innerText;
      filterSelect.classList.remove("active");
    });
  });
}

/**
 * PORTFOLIO FILTER BUTTONS - Defensive check
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const portfolioItems = document.querySelectorAll("[data-filter-item]");

if (filterBtns.length && portfolioItems.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const selectedCategory = this.innerText.trim().toLowerCase();

      portfolioItems.forEach(item => {
        const itemCategory = item.dataset.category.toLowerCase();
        item.classList.toggle("active", selectedCategory === "all" || itemCategory === selectedCategory);
      });
    });
  });
}
