const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeader() { return $('h1')}
    get parentLocator() { return $('ul') }
    get childElements() { return this.parentLocator.$$('li') }
    get pageFooter() { return $('#page-footer')}

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    scrollToPageFooter() {
        this.pageFooter.scrollIntoView()
    }
    
}

module.exports = new LandingPage();
