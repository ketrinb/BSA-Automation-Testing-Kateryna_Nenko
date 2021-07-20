//Test 3. The doctor goes to his Profile page. He can change the data in his profile.
//Preconditions: user should be sign in on the site (email:john_admin1@admin.com, password:Pa55word)
//1.Click My Profile link
// 2. Click the Profile button
// 3. Change the name in Name field (f.e. "Anna")
//4. Click the Edit button

// Expected result: The user name in his profile was changed (on Anna).

const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Profile Editing:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
  
  it('should be able to change profile data', async function () {
      
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
   const profileLink = await $('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');
   await profileLink.click();

await app.profilePage.editing ({
      name: `Anna`,
            
  });
  const myName = $('input[name="name"]');
  expect(myName).toHaveValueContaining('Anna');
});
});
