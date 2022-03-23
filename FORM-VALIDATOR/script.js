// Pull all the dom ements that you need

const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(inputElement, message) {
  const formControl = inputElement.parentElement;
  console.log(formControl);
  formControl.className = "form-control error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
}

function showSucess(el) {
  const formControl = el.parentElement;
  console.log(el.value);
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

function getFieldName(input) {
  let newString = "verification password";
  if (input === "password2") {
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element.id)} is required`);
    } else {
      showSucess(element);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length <= min) {
    showError(input, `must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `must be at less than ${max} characters`);
  } else {
    showSucess(input);
  }
}

function checkEmail(email) {
  if (email.value) {
    if (!isValidEmail(email.value.trim())) {
      showError(email, "Email is not valid");
    } else {
      showSucess(email);
    }
  }
}
function checkPasswordsMatch(password, password2) {
  if (password.value === password2.value) {
    showSucess(password);
  } else {
    showError(password2, "passwords do not match ");
  }
}
// Event Listeners
form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password, password2);
});
