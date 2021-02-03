describe('retries', function() {
    // Retry all tests in this suite up to 2 times
    this.retries(2);

    it('First Test', () => {
        console.log('This is the first test');
        browser.fail()
    })

    it('Second Test', () => {
        console.log('This is the second test');
        browser.fail()
    })

    it('Third Test', () => {
        console.log('This is the third test');
    })
})
