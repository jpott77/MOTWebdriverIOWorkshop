const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HoverPage extends Page {
    /**
     * define selectors using getter methods
     */
    image(index) { return $(`.example .figure:nth-child(${index}) img`) }
    caption(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`)}

    /**
    * Hovers over the specified image
    * @param {Number} index the specific index of the image
    */
    hoverOnImage(index) {
        this.image(index).waitForDisplayed()
        this.image(index).moveTo(1, 1)
    }


    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    getCaption(index) {
        this.caption(index).waitForDisplayed()
        return this.caption(index).getText()
    }
    
}

module.exports = new HoverPage();
