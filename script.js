document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successBox = document.getElementById("successBox");

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function clearMessages() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successBox.hidden = true;
  }

  function validate() {
    clearMessages();

    let ok = true;

    if (name.value.trim().length < 2) {
      nameError.textContent = "Please enter your name (at least 2 characters).";
      ok = false;
    }

    if (!isEmail(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address (example: you@example.com).";
      ok = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      ok = false;
    }

    return ok;
  }

  // Show errors before submit (as the user types)
  form.addEventListener("input", () => {
    // Don’t spam errors on first keystroke if everything is empty.
    // But if they've started typing, validation feedback is helpful.
    if (name.value || email.value || message.value) validate();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validate()) return;

    form.reset();
    successBox.hidden = false;
    successBox.focus();
  });
});
