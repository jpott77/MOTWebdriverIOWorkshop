const FramePage = require('../pageobjects/iframe.page')

describe('testing a field is enabled and disabled', () =>{ 
    it('verify that the field can be enabled and disabled', () =>{ 
        browser.url('https://the-internet.herokuapp.com/dynamic_controls')

        FramePage.enableButton.waitForDisplayed()
        FramePage.enableButton.click() 
        FramePage.enableField.waitForEnabled() 
        assert.equal(FramePage.enableField.isEnabled(), true) 
    })
})