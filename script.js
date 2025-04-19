// ===== DOM Elements =====
const header = document.getElementById("header");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const currentYearElement = document.getElementById("current-year");
const navLinks = document.querySelectorAll('a[href^="#"]');

// ===== Set Current Year =====
currentYearElement.textContent = new Date().getFullYear();

// ===== Header Scroll Effect =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== Mobile Menu Toggle =====
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  // Update menu button icon
  const isOpen = mobileMenu.classList.contains("open");

  mobileMenuBtn.innerHTML = isOpen
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
});

// ===== Smooth Scrolling for Navigation =====
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Close mobile menu if open
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");

      mobileMenuBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    }

    // Get the target section
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop - 80, // Account for header height
      behavior: "smooth",
    });
  });
});

// Initialize the header state on page load
if (window.scrollY > 50) {
  header.classList.add("scrolled");
}

// Announcement Banner functionality
const SHEET_ID = '1p5_QRMi2L_tN13EeLg58sMS__XGCIfx7T9Wp0ZLZU58';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Announcements`;

async function checkAnnouncements() {
  try {
    const response = await fetch(CSV_URL);
    const text = await response.text();
    
    // Parse CSV (assuming first row is headers)
    const rows = text.split('\n').slice(1); // Skip header row
    if (rows.length > 0) {
      const latestRow = rows[0].split(',');
      const message = latestRow[0].replace(/^"|"$/g, ''); // Remove quotes
      const isActive = latestRow[1].trim().toLowerCase() === 'true';
      
      const banner = document.getElementById('announcement-banner');
      const header = document.getElementById('header');
      const homeSection = document.querySelector('.home');
      
      if (message && isActive) {
        document.getElementById('announcement-text').textContent = message;
        banner.style.display = 'block';
        header.style.top = '40px';
        if (homeSection) {
          homeSection.style.paddingTop = 'calc(40px + 72px)';
        }
      } else {
        banner.style.display = 'none';
        header.style.top = '0';
        if (homeSection) {
          homeSection.style.paddingTop = '72px';
        }
      }
    }
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
}

function closeAnnouncement() {
  const banner = document.getElementById('announcement-banner');
  const header = document.getElementById('header');
  banner.style.display = 'none';
  header.style.top = '0';
  
  // Also adjust the home section padding
  const homeSection = document.querySelector('.home');
  if (homeSection) {
    homeSection.style.paddingTop = '72px'; // Just the header height
  }
}

// Check for announcements when page loads
document.addEventListener('DOMContentLoaded', () => {
  checkAnnouncements();
  
  // Check for new announcements every 5 minutes
  setInterval(checkAnnouncements, 5 * 60 * 1000);
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu functionality
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('active');
  this.classList.toggle('active');
});
