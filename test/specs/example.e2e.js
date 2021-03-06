const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        wdioExpect(SecurePage.flashAlert).toBeExisting();
        wdioExpect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


