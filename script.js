// Dark Mode Toggle Feature
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Counter Game
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Form Validation
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formMessage.textContent = '';

  let valid = true;

  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter your name (at least 2 characters).';
    valid = false;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    signupForm.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above and try again.';
  }
});

// FAQ Collapsible
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isShown = answer.style.display === 'block';
    answer.style.display = isShown ? 'none' : 'block';
  });
});

// Dropdown Menu
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownList = document.getElementById('dropdownList');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const selectedOption = document.getElementById('selectedOption');

dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('hidden');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedOption.textContent = `Selected: ${item.textContent}`;
    dropdownList.classList.add('hidden');
  });
});

document.addEventListener('click', (event) => {
  if (!dropdownBtn.contains(event.target) && !dropdownList.contains(event.target)) {
    dropdownList.classList.add('hidden');
  }
});

// Tabbed Interface
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    button.classList.add('active');
    const tabId = button.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});
