const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const errorFullName = document.querySelector(".error_name");
const email = document.querySelector(".email");
const errorEmail = document.querySelector(".error_email");
const subject = document.querySelector(".subject");
const errorSubject = document.querySelector(".error_subject");
const textarea = document.querySelector(".textarea");
const errorTextarea = document.querySelector(".error_textarea");
const sendButton = document.querySelector(".contact_button");
const thankYouMessage = document.querySelector(".thankyou_message");

let formValid = true;

function formSuccess(e) {
  e.preventDefault();

  formValid = true;

  if (checkLength(fullName.value, 4)) {
    errorFullName.style.display = "none";
  } else {
    formValid = false;
    thankYouMessage.style.display = "none";
    errorFullName.style.display = "block";
  }

  if (validateEmail(email.value)) {
    errorEmail.style.display = "none";
  } else {
    formValid = false;
    thankYouMessage.style.display = "none";
    errorEmail.style.display = "block";
  }

  if (checkLength(subject.value, 14)) {
    errorSubject.style.display = "none";
  } else {
    formValid = false;
    thankYouMessage.style.display = "none";
    errorSubject.style.display = "block";
  }

  if (checkLength(textarea.value, 24)) {
    errorTextarea.style.display = "none";
  } else {
    formValid = false;
    thankYouMessage.style.display = "none";
    errorTextarea.style.display = "block";
  }

  if (formValid) {
    // const newForm = e.target;
    // let body = new FormData(newForm);
    // console.log(body);

    // async (action, { method, body }) => {
    //   try {
    //     const response = await fetch(action, { method, body });
    //     const results = await response.json();
    //     console.log(results);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    sendInformation(e);

    form.remove();
    thankYouMessage.style.display = "block";
  }
}

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", formSuccess);

// Sending form information to Wordpress

function sendInformation(e) {
  const newForm = e.target;
  let body = new FormData(newForm);
  const action =
    "https://chasju.online/allthingsjupiter/wp-json/contact-form-7/v1/contact-forms/84/feedback";
  const method = "POST";

  fetch(action, {
    method,
    body,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
