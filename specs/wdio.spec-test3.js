//Test 3. The user can edit data in his profile.
//1. Log in (email:john_admin1@admin.com, password:Pa55word)
//2.Click My Profile link
//3. Click "pen" button
//4. Edit data (((((Failed
//5. Click Edit button
//6. Check results

const { expect } = require("chai");

describe('Editing data:', function () {
     it('should be able to edit data', async function () {
         await browser.setWindowSize(1440, 960);
         await browser.url('/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name = "password"]');

        const signInButton = await $('button');

        await emailField.waitForDisplayed({timeout: 5000});
        await emailField.setValue('john_admin1@admin.com');
        await passwordField.waitForDisplayed({timeout: 5000});
        await passwordField.setValue('Pa55word');

        await signInButton.waitForDisplayed({timeout: 5000});
        await signInButton.click();

        const myProfileLink = await $('a[href="/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265"]');        
        await myProfileLink.waitForDisplayed({timeout: 5000});
        await myProfileLink.click();
        await browser.url('/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

        const pencilButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO.styles_gray-light__3fTxu.styles_edit__ftuHl');
        //await pencilButton.waitForDisplayed({timeout: 5000});
        await pencilButton.click();
        await browser.pause(5000)

        const usernameField = await $('input[name="name"]'); 
        await usernameField.getValue();
        usernameField.clearValue();
        await usernameField.getValue();
       // await usernameField.setValue('Anna');
             
    
               
           
        
        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');
        await browser.reloadSession();

        
        
    });
});
