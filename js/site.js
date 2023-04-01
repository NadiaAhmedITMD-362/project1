// get form and input fields
const form = document.querySelector('#signup-form');
const fullNameInput = document.querySelector('#fullName');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phoneNumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

// get error message elements
const emailError = document.querySelector('#email-error');

// handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateEmail()) {
    emailError.innerText = 'Invalid email address';
  } else {
    emailError.innerText = '';
    alert('Form submitted successfully!');
    form.reset();
  }
});

// validate email format
function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
