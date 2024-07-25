class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindSubmit(this.handleSubscribe.bind(this));
    this.view.bindDismiss(this.handleDismiss.bind(this));
  }

  handleSubscribe(event) {
    event.preventDefault();
    const email = this.view.getEmailInput();

    if (this.model.validateEmail(email)) {
      this.view.hideErrorMessage();
      this.view.showThankYouPage();
      this.view.displaySuccessMessage(email);
      this.view.resetEmailInput();
    } else {
      this.view.showErrorMessage();
    }
  }

  handleDismiss() {
    this.view.showMainPage();
    this.view.hideErrorMessage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new Controller(new Model(), new View());
});
