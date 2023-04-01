const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting
      event.preventDefault();
    
      // Email validation
      if (!emailInput.checkValidity()) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
      } else {
        emailError.style.display = 'none';
