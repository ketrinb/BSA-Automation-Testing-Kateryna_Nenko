const { Button, Input } = require('../elements');

class ClinicsPage {

    constructor() {
    this.submitButton = new Button('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
        
    this.clinicnameField = new Input('input[name="name"]');
    this.addressField = new Input('input[name="address"]');
    
    this.statusDdl = new Button('div.selectStyles__control', 0);
    this.cityDdl = new Button('div.selectStyles__control', 1);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    }
      
    async adding({ name, address, status, city }) {
        await this.submitButton.click();
        
        await this.clinicnameField.setValue(name);
        await this.addressField.setValue(address);
           
        await this.statusDdl.click();
        await this.ddlOption.clickByText(status);
    
        await this.sityDdl.click();
        await this.ddlOption.clickByText(city);
            
      }
}

module.exports = { ClinicsPage };