// The user put the wrong email while filling data in the login page. The user should see an error message informing him about an incorrect password.
// 1. Fill the email field (john_admin2@admin.com)
//2. Fill a password in the Password field (Pa55word)
//3. Click the Sign-in button.
// Expected result: The user logged in on the site and was redirected to the doctors page.


const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

 describe('Autorization with entering invalid data:', function () {
    beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
    });
  
    afterEach(async function () {
      await browser.reloadSession();
    });

  it('should not be able to log in', async function () {
    await app.authPage.login({
     email: 'john_admin2@admin.com',
     password: 'Pa44word',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === '/sign-in';
      },
      { timeout: 5000 },
    );

    const errorMessage = $('div.rrt-text=Password is incorrect');
    expect(errorMessage).toBeDisplayed();

  });
