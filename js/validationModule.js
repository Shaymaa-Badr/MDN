// Contact form elements
let name = document.querySelector("#name"),
  email = document.querySelector("#email"),
  phone = document.querySelector("#phone"),
  age = document.querySelector("#age"),
  password = document.querySelector("#password"),
  rePassword = document.querySelector("#rePassword");

// Create alert div element
let alertDanger = document.createElement("div");
alertDanger.className = "alert-danger alert alert-danger";

// key up events
name.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
age.addEventListener("keyup", validateAge);
password.addEventListener("keyup", validatePassword);
rePassword.addEventListener("keyup", validateRePassword);

// REGEX

// Check validate name
function validateName() {
  let regexName = /^[A-Z a-z ]{2,}$/;
  if (!regexName.test(name.value)) {
    name.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = "Please enter a valid name";
  } else {
    alertDanger.remove();
  }
}

// Check validate email
function validateEmail() {
  let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!regexEmail.test(email.value)) {
    email.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = "Please enter a valid email";
  } else {
    alertDanger.remove();
  }
}
// Check validate phone
function validatePhone() {
  let regexPhone = /^(\+2|002)?01[0125][0-9]{8}$/;
  if (!regexPhone.test(phone.value)) {
    phone.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = "Please enter a valid phone";
  } else {
    alertDanger.remove();
  }
}
// Check validate age
function validateAge() {
  let regexAge = /^[0-9]{2}$/;
  if (!regexAge.test(age.value)) {
    age.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = "Please enter a valid age";
  } else {
    alertDanger.remove();
  }
}
// Check validate password
function validatePassword() {
  let regexPassword = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!regexPassword.test(password.value)) {
    password.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = `Enter a valid password 
    Minimum eight characters, 
      at least one letter and one number`;
  } else {
    alertDanger.remove();
  }
}
// Check validate rePassword
function validateRePassword() {
  if (password.value !== rePassword.value) {
    rePassword.insertAdjacentElement("afterend", alertDanger);
    alertDanger.textContent = "Password doesn't  match";
  } else {
    alertDanger.remove();
  }
}
// export validation functions
export {
  validateName,
  validateEmail,
  validatePhone,
  validateAge,
  validatePassword,
};
