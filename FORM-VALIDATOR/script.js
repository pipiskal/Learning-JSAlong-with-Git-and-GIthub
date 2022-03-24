const form = getEl("form");
const email = getEl("email");
const username = getEl("username");
const password = getEl("password");
const password2 = getEl("password2");

const getEl = function (element) {
  return document.getElementById(element);
};
// Show input error message
function showError(inputElement, message) {
  const formControl = inputElement.parentElement;
  formControl.className = "form-control error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
}

function showSucess(inputElement) {
  const formControl = inputElement.parentElement;
  formControl.className = "form-control success";
}

const checkRequired = function (arrayEl) {
  arrayEl.forEach((el) => {
    if (el.element.value.trim() === "") {
      showError(el.element, el.blankMessage);
    } else {
      showSucess(el.element);
    }
  });
};

function isValidEmail(email) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.trim().match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

const checkEmail = function (email) {
  if (email.element.value) {
    if (!isValidEmail(email.element.value)) {
      showError(email.element, email.validationMessage);
    } else {
      showSucess(email.element);
    }
  }
};

function checkPasswordsMatch(password, password2) {
  if (password.element.value && password2.element.value) {
    if (password.element.value === password2.element.value) {
      showSucess(password.element);
    } else {
      showError(password2.element, password2.validationMatchingMessage);
    }
  }
}

const checkLength = function (input, min, max) {
  if (input.element.value) {
    if (input.element.value.length < min) {
      showError(input.element, input.validationMessage);
    } else if (input.element.value.length > max) {
      showError(input.element, input.validationMessage);
    } else {
      showSucess(input.element);
    }
  }
};

// Adding event listener to the form when the button is clicked
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // all the elements in the form with their respective error message
  const allFields = [
    {
      element: email,
      blankMessage: "Email cannot be blank",
      validationMessage: "Email is not valid ",
    },
    {
      element: username,
      blankMessage: "Username cannot be blank",
      validationMessage:
        "Username is not valid, must have more that 3 letters and less than 10 ",
    },
    {
      element: password,
      blankMessage: "Password cannot be blank",
      validationMessage: "Password is not valid must have more than 4 chars  ",
    },
    {
      element: password2,
      blankMessage: "Verification password cannot be blank",
      validationMessage: "",
      validationMatchingMessage: "Verification password doenst not match ",
    },
  ];
  checkRequired(allFields);
  checkLength(allFields[1], 3, 10);
  checkLength(allFields[2], 4, 15);
  checkEmail(allFields[0]);
  checkPasswordsMatch(allFields[2], allFields[3]);
});
