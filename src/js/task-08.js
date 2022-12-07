const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmite);

function handleSubmite(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Будь ласка заповніть всі поля!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

