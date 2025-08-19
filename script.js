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
 * PORTFOLIO FILTER BUTTONS - Enhanced with better filtering
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const portfolioItems = document.querySelectorAll("[data-filter-item]");

if (filterBtns.length && portfolioItems.length) {
  // Set first button as active by default
  if (filterBtns[0]) filterBtns[0].classList.add("active");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const selectedCategory = this.innerText.trim().toLowerCase();

      portfolioItems.forEach(item => {
        const itemCategory = item.dataset.category.toLowerCase();
        
        if (selectedCategory === "all" || itemCategory.includes(selectedCategory)) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
}

/**
 * FORM VALIDATION AND ENHANCEMENT
 */
const contactForm = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (contactForm && formInputs.length && formBtn) {
  // Enable form button when all required fields are filled
  formInputs.forEach(input => {
    input.addEventListener("input", function() {
      const allFilled = Array.from(formInputs).every(inp => inp.value.trim() !== "");
      formBtn.disabled = !allFilled;
    });
  });

  // Handle form submission
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Basic form validation
    let isValid = true;
    formInputs.forEach(input => {
      if (input.value.trim() === "") {
        isValid = false;
        input.style.borderColor = "var(--bittersweet-shimmer)";
      } else {
        input.style.borderColor = "var(--jet)";
      }
    });

    if (isValid) {
      // Show success message (you can replace this with actual form submission)
      alert("Thank you for your message! I'll get back to you soon.");
      contactForm.reset();
      formBtn.disabled = true;
    }
  });
}
