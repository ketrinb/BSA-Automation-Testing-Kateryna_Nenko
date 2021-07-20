const { Button, Input } = require('../elements');

class ChatsPage  {
  constructor() {
    this.nameField = new Input('input[name="name"]');
    this.textField = new Input('input[name="text"]');
    
    this.userDdl = new Button('div.styles_user__MEl_B styles_selected__1pc5M');
    
    this.submitButton = new Button('button');
  }


  async messaging({ name, text }) {
    await this.nameField.setValue(name);
    await this.textField.setValue(text);
    
    await this.userDdl.click();

    await this.submitButton.click();
  }
}

module.exports = { ChatsPage };
