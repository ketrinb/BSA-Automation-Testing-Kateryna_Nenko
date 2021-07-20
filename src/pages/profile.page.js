const { Button, Input } = require('../elements');

class ProfilePage {
  constructor() {
    this.specialtyDdl = new Button('div.selectStyles__control', 0);
    this.clinicDdl = new Button('div.selectStyles__control', 1);

    this.genderDdl = new Button('div.selectStyles__control', 0);
    this.statusDdl = new Button('div.selectStyles__control', 1);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.submitButton = new Button('button');

    this.firstsaveButtons = new Button('button[type="submit"], 0');
    this.secondsaveButtons = new Button('button[type="submit"], 1');

    this.editProfileButton = new Button('button.styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl');
    this.usernameField = new Input('input[name="name"]');
    this.surnameField = new Input('input[name="surname"]');
    this.birthDateField = new Input('input[name="birthdate"]');
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    this.phoneField = new Input('input[name="phone"]');
    this.editButton = new Button('div.styles_editContainer__3utW5');
  
  }

  async editing ({ name, surname, birthDate, email, password, phone, status, gender }) {
    await this.editProfileButton.click();

    await this.usernameField.setValue(name);
    await this.surnameField.setValue(surname);
    await this.birthDateField.setValue(birthDate);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.phoneField.setValue(phone);
    
    await this.genderDdl.click();
    await this.ddlOption.clickByText(gender);

    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);


    await this.editButton.click();
  }

  async selecting ({ specialty, clinic }) {
    
    await this.specialtyDdl.click();
    await this.ddlOption.clickByText(specialty);

    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinic);

    await this.firstsaveButton.click();
    await this.secondsaveButton.click();
  }
 }

module.exports = { ProfilePage };
