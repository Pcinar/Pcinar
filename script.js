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

  function validate() {
    let ok = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successBox.hidden = true;

    if (name.value.trim().length < 2) {
      nameError.textContent = "Please enter your name.";
      ok = false;
    }

    if (!isEmail(email.value.trim())) {
      emailError.textContent = "Please enter a valid email.";
      ok = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      ok = false;
    }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    form.reset();
    successBox.hidden = false;
  });
});

