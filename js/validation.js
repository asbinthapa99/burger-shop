// form-validation.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        // Validation
        if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
        }
  
        if (!email.includes('@') || !email.includes('.')) {
          alert("Please enter a valid email address.");
          return;
        }
  
        alert("Thanks, " + name + "! Your message has been sent.");
        contactForm.reset();
      });
    }
  });