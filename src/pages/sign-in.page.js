const { Button, Input } = require('../elements');

class SignInPage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    
  }

  async login ({ email, password }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);


    await this.submitButton.click();
  }
}

module.exports = { SignInPage };