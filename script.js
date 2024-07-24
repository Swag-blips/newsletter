"use strict";

let emailInput = document.querySelector(".emailInput");
let submitButton = document.querySelector(".submit");
let mainContent = document.querySelector(".main-content");
let imgContainer = document.querySelector(".img-container");
let thankYouPage = document.querySelector(".thank-you");
let errorMessage = document.getElementById("error-message");
let confirmationMessage = document.getElementById("confirmation-message");
let emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let dismissButton = document.querySelector(".dismiss-message");

document.addEventListener("DOMContentLoaded", () => {
  let subscribe = (e) => {
    e.preventDefault();

    if (validateInput()) {
      mainContent.style.display = "none";
      imgContainer.style.display = "none";
      thankYouPage.style.display = "flex";
      generateSuccessMessage(emailInput);
    } else {
      emailInput.style.border = "1px solid rgba(255,97,85)";
      emailInput.style.background = "rgba(255,97,85,15%)";
      emailInput.style.color = "rgba(255,97,85)";
      errorMessage.style.display = "flex";
    }
  };

  const dismissMessage = () => {
    mainContent.style.display = "flex";
    imgContainer.style.display = "flex";
    thankYouPage.style.display = "none";
  };

  submitButton.addEventListener("click", subscribe);
  dismissButton.addEventListener("click", dismissMessage);
  const validateInput = () => {
    let isValid = false;

    if (!emailInput.value.trim() === "") {
      isValid = true;
    } else if (emailRegex.test(emailInput.value.trim())) {
      isValid = true;
    }

    return isValid;
  };

  const generateSuccessMessage = (email) => {
    let markup = `
       A confirmation email has been sent to
            <span>${email.value.trim()}.</span> Please open it and click the
            button inside to confirm your subscription
    `;

    confirmationMessage.innerHTML = markup;
  };
});
