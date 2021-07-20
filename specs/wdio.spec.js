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

        const myProfileLink = await $('a[href="/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265"]');        
        await myProfileLink.click();
    
         await app.profilePage.editing ({
          name: `Anna`,
                
      });
      const myName = $('input[name="name"]');
      expect(myName).toHaveValueContaining('Anna');
    
    
      xit('should be able to choose specialty and clinic', async function () {
    
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
            clinic: 'UCSFMedicalCenter',
                
        });
        await browser.waitUntil(
          async function () {
            const myClinic = await browser.$('div[id="react-select-9-option-4"]');
            return myClinic === 'UCSF Medical Center';
          },
          { timeout: 5000 },
        );
    
    
        const mySpecialty = $('div[id="react-select-8-option-2"]');
        expect(mySpecialty).to.be.eql('dentist');
    
    
        const myClinic = $('div[id="react-select-9-option-4"]');
        expect(myClinic).to.be.eql('UCSF Medical Center');
    
    
     });
    });
    });
    