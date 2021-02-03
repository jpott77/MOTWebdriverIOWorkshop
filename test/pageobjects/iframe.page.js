const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FramePage extends Page {
    /**
     * define selectors using getter methods
     */
    get iframe() { return $('#mce_0_ifr') }
    get iframeBody() { return $('#tinymce')}
    get header() { return $('.example h3')}

    get enableField() { return $("#input-example input[type='text']")}
    get enableButton() { return $("#input-example button[type='button']")}

    /**
    * Enter text in the iframe
    * @param {String} text the text to be entered
    */
   sendTextToBody(text) {
    this.iframeBody.waitForDisplayed()
    this.iframeBody.clearValue()
    this.iframeBody.click()
    this.iframeBody.setValue(text)
    }

    
}

module.exports = new FramePage();
