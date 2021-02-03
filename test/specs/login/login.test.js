const LoginPage = require('../../pageobjects/login.page');
const SecurePage = require('../../pageobjects/secure.page');
const LoginData = require('../../data/login.data')

describe('Login Tests', () => {
    beforeEach('Open Login browser', () => {
        LoginPage.open();
    });

        for (let count in LoginData) {
            it("verify that the user is able to login with correct username and password ", () => {
                LoginPage.login(LoginData[count].userName, LoginData[count].password);
                assert.equal(true,SecurePage.flashAlert.isExisting())
                expect(SecurePage.flashAlert.getText()).to.include(LoginData[count].message);
            })
        }
});