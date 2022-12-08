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
  const userInfo = {email: email.value, password: password.value}

  console.log(userInfo);
  event.currentTarget.reset();
}

