//Unauthorised user goes to the welcome page. The user should be redirected to the login page and see the login form to authorize.
// 1. Fill the email field (john_admin2@admin.com)
//2. Fill a password in the Password field (Pa55word)
//3. Click the Sign-in button.
// Expected result: The user logged in on the site and was redirected to the doctors page.

const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Sign in:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to log in', async function () {
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

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
});
