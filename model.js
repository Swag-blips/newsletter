class Model {
  constructor() {
    this.emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  }

  validateEmail(email) {
    let isValid = false;
    const trimmedEmail = email.trim();

    if (trimmedEmail !== "") {
      if (this.emailRegex.test(trimmedEmail)) {
        isValid = true;
      }
    }

    return isValid;
  }
}
