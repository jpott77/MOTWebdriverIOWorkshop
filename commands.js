module.exports = {
    waitThenClick: function (element) {
        element.waitForExist()
        element.waitForDisplayed()
        element.click()
    },
    getURLAndTitle: function(){
        let newUrl = browser.getUrl()
        let newTitle = browser.getTitle()

        // let arr =[url,title]
        let obj ={
            url: newUrl,
            title: newTitle
        }
        return obj
    }
}