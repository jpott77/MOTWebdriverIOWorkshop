const hoverPage = require('../pageobjects/hover.page');

describe('WebdriverIO API Actions', function () {
    it('should hover on figure 1', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        hoverPage.hoverOnImage(3)
        assert.equal("name: user1", hoverPage.getCaption(3))
    })

    it('should hover on figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        hoverPage.hoverOnImage(4)
        assert.equal("name: user2", hoverPage.getCaption(4))
    })

    it('should hover on figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        hoverPage.hoverOnImage(5)
        assert.equal("name: user3", hoverPage.getCaption(5))
    })
 })
