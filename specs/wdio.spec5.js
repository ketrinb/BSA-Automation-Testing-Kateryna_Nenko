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