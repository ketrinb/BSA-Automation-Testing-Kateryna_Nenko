//2.Log in with invalid data.
//1. Write the correct email (john_admin1@admin.com)
//2. Write invalid password (123456)
//Check results (message "Error 401. Email is incorrect" is displayed) (((Failed

const { expect } = require("chai");

describe('Sign in:', function () {
    it('should be able to sign in', async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');

    
        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name = "password"]');

        const signInButton = await $('button');

        await emailField.waitForDisplayed({timeout: 5000});
        await emailField.setValue('john_admin1@admin.com');
        await passwordField.waitForDisplayed({timeout: 5000});
        await passwordField.setValue('123456');

        await signInButton.waitForDisplayed({timeout: 5000});
        await signInButton.click();
  
              
        const message = await message.getValue();
        expect(value).to.be.eql('Error 401. Email is incorrect');
          

        await browser.reloadSession();
    });
});
