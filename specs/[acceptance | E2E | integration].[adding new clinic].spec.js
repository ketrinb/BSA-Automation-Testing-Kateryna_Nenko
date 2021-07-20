//Test 5. The admin goes to the Clinics page. He should be able to add the new clinic to the list of the clinic.
//Preconditions: user should be sign in on the site (email:john_admin1@admin.com, password:Pa55word)
//1.Click Clinics link
// 2. Click the Add button
// 3. Fill the form with data: clinics name (Romashka), clinics address (Forest st., 5), select status (private), select city (New York, NY).
//4. Click the Add button
// Expected result: The clinic Romashka is created and displayed on the site.

const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Adding new clinic:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
  
  it('should be able to add new clinic', async function () {

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
    const clinicsLink = await $('a[href="/clinics"]');
     await clinicsLink.click();

await app.clinicsPage.adding ({

      name: `Romashka`,
      address: 'Forest st., 5',
      status: 'private',
      city: 'New York, NY',      
    });


const newClinic = $('span.styles_title__3xRcc=Romashka')
expect(newClinic).toExist();

 });
});
