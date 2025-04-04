
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change icon between menu and X
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('active')) {
          icon.setAttribute('data-feather', 'x');
        } else {
          icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
      }
    });
  }
  
  // Language Selector - Updated functionality
  const langItems = document.querySelectorAll('.lang-dropdown li');
  const langButton = document.querySelector('.lang-button span');
  
  if (langItems.length && langButton) {
    langItems.forEach(item => {
      item.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        const langText = lang.toUpperCase();
        
        // Update button text
        langButton.innerHTML = `${langText}`;
        
        // Close dropdown
        document.querySelector('.lang-dropdown').style.display = 'none';
        
        // Get current page path
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        // Determine target page based on language
        let targetPage = currentPage;
        
        // If we're already on a translated page, get the base page name
        if (currentPage.includes('_es') || currentPage.includes('_pt')) {
          targetPage = currentPage.replace('_es.html', '.html').replace('_pt.html', '.html');
        }
        
        // Create the new page path based on the selected language
        let newPage = targetPage;
        if (lang === 'es') {
          newPage = targetPage.replace('.html', '_es.html');
        } else if (lang === 'pt') {
          newPage = targetPage.replace('.html', '_pt.html');
        } else {
          // Default to English version (no suffix)
          newPage = targetPage;
        }
        
        // Navigate to the new page
        window.location.href = newPage;
        
        // Prevent the dropdown from immediately showing again
        setTimeout(() => {
          document.querySelector('.lang-dropdown').style.display = '';
        }, 10);
      });
    });
  }
  
  // FAQ toggles
  function setupFaqToggles() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
      });
    });
  }
  
  setupFaqToggles();
  
  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const formFields = contactForm.querySelectorAll('input, textarea');
      
      formFields.forEach(field => {
        if (field.required && !field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
        
        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(field.value)) {
            isValid = false;
            field.classList.add('error');
          }
        }
      });
      
      if (isValid) {
        // In a real implementation, this would submit the form via AJAX
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      } else {
        alert('Please fill out all required fields correctly.');
      }
    });
  }
  
  // Portfolio filter functionality
  function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length && portfolioItems.length) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter value
          const filter = this.getAttribute('data-filter');
          
          // Filter portfolio items
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }
  }
  
  setupPortfolioFilters();
  
  // Blog filtering functionality
  function setupBlogFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn[data-category]');
    const blogCards = document.querySelectorAll('.blog-card');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');
    const resetFilters = document.getElementById('resetFilters');
    
    if (filterButtons.length && blogCards.length && searchInput && noResults && resetFilters) {
      function filterBlog() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');
        
        let visibleCount = 0;
        
        blogCards.forEach(card => {
          const cardTitle = card.querySelector('h2').textContent.toLowerCase();
          const cardDesc = card.querySelector('p').textContent.toLowerCase();
          const cardCategory = card.getAttribute('data-category');
          
          const matchesSearch = cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);
          const matchesCategory = activeFilter === 'all' || cardCategory === activeFilter;
          
          if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        if (visibleCount === 0) {
          noResults.style.display = 'block';
        } else {
          noResults.style.display = 'none';
        }
      }
      
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          filterBlog();
        });
      });
      
      searchInput.addEventListener('input', filterBlog);
      
      resetFilters.addEventListener('click', function() {
        searchInput.value = '';
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        filterBlog();
      });
    }
  }
  
  setupBlogFilters();
  
  // Update copyright year
  const yearElements = document.querySelectorAll('#current-year');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
});
