// Pull all the dom ements that you need

// const form = document.getElementById("form");
// const email = document.getElementById("email");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// // Show input error message
// function showError(inputElement, message) {
//   const formControl = inputElement.parentElement;
//   console.log(formControl);
//   formControl.className = "form-control error";
//   const errorMessage = formControl.querySelector("small");
//   errorMessage.innerText = message;
// }

// function showSucess(el) {
//   const formControl = el.parentElement;
//   console.log(el.value);
//   formControl.className = "form-control success";
// }

// function isValidEmail(email) {
//   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email.match(regexEmail)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getFieldName(input) {
//   let newString = "verification password";
//   if (input === "password2") {
//     return newString.charAt(0).toUpperCase() + newString.slice(1);
//   }
//   return input.charAt(0).toUpperCase() + input.slice(1);
// }

// function checkRequired(inputArr) {
//   inputArr.forEach((element) => {
//     if (element.value.trim() === "") {
//       showError(element, `${getFieldName(element.id)} is required`);
//     } else {
//       showSucess(element);
//     }
//   });
// }
// function checkLength(input, min, max) {
//   if (input.value.length <= min) {
//     showError(input, `must be at least ${min} characters`);
//   } else if (input.value.length > max) {
//     showError(input, `must be at less than ${max} characters`);
//   } else {
//     showSucess(input);
//   }
// }

// function checkEmail(email) {
//   if (email.value) {
//     if (!isValidEmail(email.value.trim())) {
//       showError(email, "Email is not valid");
//     } else {
//       showSucess(email);
//     }
//   }
// }

// function clearForm() {
//   email.value = "";
//   username.value = "";
//   password.value = "";
//   password2.value = "";
// }
// function checkPasswordsMatch(password, password2) {
//   if (password.value === password2.value) {
//     showSucess(password);
//   } else {
//     showError(password2, "passwords do not match ");
//   }
// }
// // Event Listeners
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   checkRequired([username, email, password, password2]);
//   checkEmail(email);
//   checkLength(username, 3, 15);
//   checkLength(password, 6, 25);
//   checkPasswordsMatch(password, password2);
//   clearForm();
// });

const getEl = function (element) {
  return document.getElementById(element);
};

const form = getEl("form");
const email = getEl("email");
const username = getEl("username");
const password = getEl("password");
const password2 = getEl("password2");

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
