// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  updateThemeIcon();
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const moonIcons = document.querySelectorAll('.icon-moon');
  const sunIcons = document.querySelectorAll('.icon-sun');
  
  moonIcons.forEach(icon => {
    icon.style.display = isDark ? 'none' : 'block';
  });
  sunIcons.forEach(icon => {
    icon.style.display = isDark ? 'block' : 'none';
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = menuBtn?.querySelector('.icon-menu');
  const closeIcon = menuBtn?.querySelector('.icon-close');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      if (menuIcon) menuIcon.style.display = isOpen ? 'none' : 'block';
      if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
      });
    });
  }
}

// Form Submission
function initContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        alert('Message sent successfully! I will get back to you soon.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
}

// Animate skill bars on scroll
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        entry.target.style.width = width + '%';
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.dataset.width = parseInt(width);
    bar.style.width = '0';
    observer.observe(bar);
  });
}

// Stagger animation on scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Set active nav link based on current page
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initMobileMenu();
  initContactForm();
  initSkillBars();
  initScrollAnimations();
  initActiveNav();
});

// Listen for theme toggle clicks
document.addEventListener('click', (e) => {
  if (e.target.closest('.theme-toggle')) {
    toggleTheme();
  }
});
