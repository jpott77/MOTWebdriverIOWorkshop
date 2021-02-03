describe('Mocha Hooks', () => {

    before('Execute Before FIRST Test', () => {
        console.log('runs once before the FIRST test');
    });

    after('Execute After LAST Tests', () => {
        console.log('runs once after the LAST test in this block');
    });

    beforeEach('Execute Before EACH Test', () => {
        console.log('runs before EACH test');
    });

    afterEach('Execute After EACH Test', () => {
        console.log('runs after EACH test');
    });

    it('First Test', () => {
        console.log('This is the first test');
    })

    it('Second Test', () => {
        console.log('This is the second test');
    })

    it('Third Test', () => {
        console.log('This is the third tests');
    })
})

