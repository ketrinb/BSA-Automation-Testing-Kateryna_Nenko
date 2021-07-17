//Test 4. The doctor can change the speciality and the clinic in his profile.
//1. Log in (email:john_admin1@admin.com, password:Pa55word)
//2.Click My Profile link
//3. Choose new specialty (dentist) and clinic (New York, NY)
//4. Save results
//5. Check results((

const { expect } = require("chai");

describe('Editing data:', function () {
     it('should be able to change speciality and clinic', async function () {
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

        const specialty = await $('div.selectStyles__control');
        await specialty.getValue();
        const clinic = await $('div.selectStyles__control');
        await clinic.getValue();
        const ddls = await $$('div.selectStyles__control');
        const specialtyDdl = ddls[0];
        const clinicDdl = ddls[1];
        const specialtyOption = await $('div.selectStyles__option=dentist');
        const clinicOption = await $ ('div.selectStyles__option=Cleveland Clinic');

        await specialtyDdl.waitForDisplayed({timeout: 5000});
        await specialtyDdl.click();
        await specialtyOption.waitForDisplayed({timeout: 5000});
        await specialtyOption.click();
        await clinicDdl.waitForDisplayed({timeout: 5000});
        await clinicDdl.click();
        await clinicOption.waitForDisplayed({timeout: 5000});
        await clinicOption.click();
        
        const saveButton = await $$('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
        const firstsaveButton = saveButton[0];
        const secondsaveButton = saveButton[1];

        await firstsaveButton.waitForDisplayed({timeout: 5000});
        await firstsaveButton.click();
        await secondsaveButton.waitForDisplayed({timeout: 5000});
        await secondsaveButton.click();

       
        await browser.reloadSession();  

    });
});
