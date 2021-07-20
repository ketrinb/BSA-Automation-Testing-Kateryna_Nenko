//Test 4. The doctor goes to his Profile page. He can select the speciality and the clinic in his profile.
//Preconditions: user should be sign in on the site (email:john_admin1@admin.com, password:Pa55word)
//1.Click My Profile link
// 2. Select the specialty (dentist)
// 3. Click the button “Save”
//4. Select the clinic (New York, NY)
//5. Click the button “Save”
// Expected result: After saving, the selected speciality and the clinic are displayed in doctor's profile.

const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Selecting specialty and clinic:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
  
  it('should be able to choose specialty and clinic', async function () {

    await app.authPage.login({
      email: 'john_admin2@admin.com',
      password: 'Pa55word',
    });
      
    await browser.waitUntil(
    async function () {
    const url = await browser.getUrl();
    return url === 'http://46.101.234.121/doctors';
  },
  { timeout: 5000 },
  );

  const profileLink = await $('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]')
    await profileLink.click();
      
    await app.profilePage.selecting ({
        specialty: 'dentist',
        clinic: 'Cleveland Clinic',
            
    });
    await browser.waitUntil(
      async function () {
        const myClinic = await browser.$('div.selectStyles__option= Cleveland Clinic');
        return myClinic === 'Cleveland Clinic';
      },
      { timeout: 5000 },
    );


    const mySpecialty = $('div.selectStyles__option=dentist');
    expect(mySpecialty).to.be.eql('dentist');


    const myClinic = $('div.selectStyles__option=Cleveland Clinic');
    expect(myClinic).to.be.eql('Cleveland Clinic');


 });
});
