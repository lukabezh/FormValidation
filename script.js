const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");

function validate(e) {
  e.preventDefault(); 

  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !password) {
    message.textContent = "Fill all the fields!";
  } else if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email!";
  } else if (password.length < 8) {
    message.textContent = "Password must include a minimum of 8 characters!";
  } else {
    message.textContent = "Success";
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";

    setTimeout(() => {
      message.textContent = "";
    }, 2500);
  }
}

submit.addEventListener("click", validate);
