// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// Toggle Mobile Menu
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close Mobile Menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backToTopBtn.classList.toggle('visible', window.scrollY > 500);
});

// Scroll Reveal Animation
function revealElements() {
  const elementsToReveal = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-item');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  elementsToReveal.forEach(element => {
    const revealTop = element.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transition = 'all 0.6s ease';
    }
  });
}

// Contact Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    console.log(formData); // Log form data for demonstration

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerHTML = `
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
    `;
    
    contactForm.appendChild(successMessage);
    contactForm.reset();

    // Reset form after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}

// Initialize
window.addEventListener('load', () => {
  revealElements();
  window.addEventListener('scroll', revealElements);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});