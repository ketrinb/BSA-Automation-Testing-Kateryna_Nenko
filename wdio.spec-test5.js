//Test 5. The admin can add new clinic.
//
//1. Log in (email:john_admin1@admin.com, password:Pa55word)
//2.Click Clinics link
//3. Click Add button
//4.Fill the fileds  Name (Vet), Address(Manchester), Status(state), City (New York, NY)
//5.Click Add button
//6. Check the results(((((((

const { expect } = require("chai");

describe('Adding new clinic:', function () {
     it('should be able to add new clinic', async function () {
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

        const clinicLink = await $('a[href="/clinics"]');        
        await clinicLink.waitForDisplayed({timeout: 5000});
        await clinicLink.click();
        await browser.url('/clinics');
        await browser.pause(3000);

        const firstAddButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
        await firstAddButton.waitForDisplayed({timeout: 5000});
        await firstAddButton.click();          
     

        const clinicName = await $('input[name="name"]');
        const clinicAddress = await $('input[name="address"]');
        const ddls = await $$('div.selectStyles__control');
        const statusDdl = ddls[0];
        const cityDdl = ddls[1];
        const stateOption = await $('div.selectStyles__option=state');
        const cityOption = await $ ('div.selectStyles__option=New York, NY');
        const addButton2 = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');

        await clinicName.waitForDisplayed({timeout: 5000});
        await clinicName.setValue('Vet');
        await clinicAddress.waitForDisplayed({timeout: 5000});
        await clinicAddress.setValue('Manchester');
        await statusDdl.waitForDisplayed({timeout: 5000});
        await statusDdl.click();
        await stateOption.waitForDisplayed({timeout: 5000});
        await stateOption.click();
        await cityDdl.waitForDisplayed({timeout: 5000});
        await cityDdl.click();
        await cityOption.waitForDisplayed({timeout: 5000});
        await cityOption.click();

        const secondAddButton = await $('div.styles_submitBtn__jK6DU');
        await secondAddButton.waitForDisplayed({timeout: 5000});
        await secondAddButton.click(); 

        await browser.reloadSession();

    });
});
