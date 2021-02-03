const FramePage = require('../pageobjects/iframe.page')

describe('Testing an iframe', () =>{
    it('verify that I can enter text into the iframe', () =>{
        browser.url('https://the-internet.herokuapp.com/iframe')

        FramePage.header.waitForDisplayed()
        FramePage.iframe.waitForDisplayed()
        browser.switchToFrame(FramePage.iframe)

        FramePage.sendTextToBody('This is text in the iframe')
        assert.equal('This is text in the iframe', FramePage.iframeBody.getText())
    })
})