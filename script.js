const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');

function setError(id, message) {
  const el = document.getElementById('error-' + id);
  if (el) el.textContent = message || '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    result.hidden = false;
    result.textContent = `Thanks, ${name}! Your message was received.`;

    form.reset();
  });
}