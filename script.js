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
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Announcements`;

async function checkAnnouncements() {
  try {
    const response = await fetch(SHEET_URL);
    const text = await response.text();
    // Remove the extra "google.visualization.Query.setResponse(" and ");" text
    const jsonText = text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').slice(0, -2);
    const data = JSON.parse(jsonText);
    
    if (data.table && data.table.rows && data.table.rows.length > 1) {
      const message = data.table.rows[1].c[0]?.v; // Get first cell value from second row (index 1)
      
      const banner = document.getElementById('announcement-banner');
      const header = document.getElementById('header');
      const homeSection = document.querySelector('.home');
      
      if (message) {
        document.getElementById("announcement-text").textContent = message;
        banner.style.display = "block";
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
