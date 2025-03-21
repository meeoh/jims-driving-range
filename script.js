
// ===== DOM Elements =====
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const currentYearElement = document.getElementById('current-year');
const navLinks = document.querySelectorAll('a[href^="#"]');

// ===== Set Current Year =====
currentYearElement.textContent = new Date().getFullYear();

// ===== Header Scroll Effect =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Mobile Menu Toggle =====
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  
  // Update menu button icon
  const isOpen = mobileMenu.classList.contains('open');
  
  mobileMenuBtn.innerHTML = isOpen 
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
});

// ===== Smooth Scrolling for Navigation =====
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      
      mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    }
    
    // Get the target section
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop - 80, // Account for header height
      behavior: 'smooth'
    });
  });
});

// Initialize the header state on page load
if (window.scrollY > 50) {
  header.classList.add('scrolled');
}
