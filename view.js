class View {
  constructor() {
    this.emailInput = document.querySelector(".emailInput");
    this.submitButton = document.querySelector(".submit");
    this.mainContent = document.querySelector(".main-content");
    this.imgContainer = document.querySelector(".img-container");
    this.thankYouPage = document.querySelector(".thank-you");
    this.errorMessage = document.getElementById("error-message");
    this.confirmationMessage = document.getElementById("confirmation-message");
    this.mainContainer = document.getElementById("main-container");
    this.dismissButton = document.querySelector(".dismiss-message");
  }

  getEmailInput() {
    return this.emailInput.value.trim();
  }

  resetEmailInput() {
    this.emailInput.value = "";
  }

  showThankYouPage() {
    this.mainContainer.style.display = "none";
    this.mainContent.style.display = "none";
    this.imgContainer.style.display = "none";
    this.thankYouPage.style.display = "flex";
  }

  showMainPage() {
    this.mainContainer.style.display = "flex";
    this.mainContent.style.display = "flex";
    this.imgContainer.style.display = "flex";
    this.thankYouPage.style.display = "none";
  }

  showErrorMessage() {
    this.emailInput.style.border = "1px solid rgba(255,97,85)";
    this.emailInput.style.background = "rgba(255,97,85,15%)";
    this.emailInput.style.color = "rgba(255,97,85)";
    this.errorMessage.style.display = "flex";
  }

  hideErrorMessage() {
    this.emailInput.style.border = "";
    this.emailInput.style.background = "";
    this.emailInput.style.color = "";
    this.errorMessage.style.display = "none";
  }

  displaySuccessMessage(email) {
    let markup = `
       A confirmation email has been sent to
            <span>${email}.</span> Please open it and click the
            button inside to confirm your subscription
    `;
    this.confirmationMessage.innerHTML = markup;
  }

  bindSubmit(handler) {
    this.submitButton.addEventListener("click", handler);
  }

  bindDismiss(handler) {
    this.dismissButton.addEventListener("click", handler);
  }
}
