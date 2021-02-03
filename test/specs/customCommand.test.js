const LoginPage = require('../pageobjects/login.page');
const { assert } = require("chai")

// browser.addCommand('waitThenClick', function(element){
//     element.waitForExist()
//     element.waitForDisplayed()
//     element.click()
// })

describe('Demonstrate using WebdriverIO custom commands - addCommand Function', function(){
    it('Wait and click',()=>{
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        const addButton = $('.example button')
        addButton.click()
        const deleteButton = $('#elements button.added-manually')
        browser.waitThenClick(deleteButton)
        assert.equal(false,deleteButton.isExisting())
    })
    it('get url and title',()=>{
        browser.url(`${browser.options.baseUrl}/login`)
        LoginPage.inputUsername.waitForDisplayed()
        let result = browser.getURLAndTitle()
        // const url=res[0]
        // const title=res[1]
        assert.equal(result.url,`${browser.options.baseUrl}/login`)
        assert.equal(result.title,'The Internet')
    })
})