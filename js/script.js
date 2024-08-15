// login

function validateForm() {
  let isValid = true;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  // Clear previous errors
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => element.remove());

  // Validate name
  if (name.trim() === "") {
    displayError("name", "Name is required.");
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    displayError("name", "Name must contain only letters and spaces.");
    isValid = false;
  }

  // Validate email
  if (email.trim() === "") {
    displayError("email", "Email is required.");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    displayError("email", "Email format is invalid.");
    isValid = false;
  }

  // Validate phone
  if (phone.trim() === "") {
    displayError("phone", "Phone number is required.");
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    displayError("phone", "Phone number must be 10 digits.");
    isValid = false;
  }

  // Validate age
  if (age.trim() === "") {
    displayError("age", "Age is required.");
    isValid = false;
  } else if (parseInt(age) <= 0) {
    displayError("age", "Age must be a positive number.");
    isValid = false;
  }

  // Validate country
  if (country === "") {
    displayError("country", "Please select a country.");
    isValid = false;
  }

  return isValid;
}
// if (fucn == true) {
//   window.location.href = "/index.html";
// }
function displayError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.createElement("p");
  error.className = "error";
  error.innerText = message;
  field.parentElement.insertBefore(error, field.nextSibling);
}

// about js
function exploreMore() {
  window.location.href = "/about.html";
}
function dragAndDropBuilder() {
  window.location.href = "/drag.html";
}
function backToHome() {
  window.location.href = "/index.html";
}
function contactUs() {
  window.location.href = "/contact.html";
}

// conatct form
function validateContactForm() {
  let isValid = true;
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const phone = document.getElementById("contact-phone").value;
  const notes = document.getElementById("contact-notes").value;
  const country = document.getElementById("contact-country").value;

  // Clear previous errors
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => element.remove());

  // Validate name
  if (name.trim() === "") {
    displayContactError("contact-name", "Name is required.");
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    displayContactError(
      "contact-name",
      "Name must contain only letters and spaces."
    );
    isValid = false;
  }

  // Validate email
  if (email.trim() === "") {
    displayContactError("contact-email", "Email is required.");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    displayContactError("contact-email", "Email format is invalid.");
    isValid = false;
  }

  // Validate phone
  if (phone.trim() === "") {
    displayContactError("contact-phone", "Phone number is required.");
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    displayContactError("contact-phone", "Phone number must be 10 digits.");
    isValid = false;
  }

  // Validate age
  if (notes.trim() === "") {
    displayContactError("contact-age", "Notes is required.");
    isValid = false;
  } else if (parseInt(notes) <= 0) {
    displayContactError("contact-age", "Age must be a positive number.");
    isValid = false;
  }

  // Validate country
  if (country === "") {
    displayContactError("contact-country", "Please select a country.");
    isValid = false;
  }

  return isValid;
}

function displayContactError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.createElement("div");
  error.className = "error";
  error.innerText = message;
  field.parentElement.insertBefore(error, field.nextSibling);
}
