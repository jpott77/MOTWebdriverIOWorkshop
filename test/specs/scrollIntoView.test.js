const landingPage = require("../pageobjects/landing.page")

describe('Scroll to Element', function () {
    it('should scroll to the footer', () => {
        browser.url('/')
        landingPage.pageHeader.waitForDisplayed()
        landingPage.scrollToPageFooter()
        assert.equal(true, landingPage.pageFooter.isDisplayedInViewport())
    })
})
