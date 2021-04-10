
var TestPage = require('../page-objects/test_page')


describe('Super Hero Page', function () {
    var testPage

    beforeEach(function () {
        testPage = new TestPage()

        var url = 'file:///C:/Users/Dimitar/Documents/QA%20testing/Javascript%20Protactor%20Jason%20Meyers%20Udemy/protractor/superhero/index.html'
        browser.ignoreSynchronization = true
        //open URL
        browser.get(url)
       

    })

    afterEach(function () {
        browser.sleep(3000)

    })




    it('should load the correct URL', function () {
        //Enter text into fields
        const userNameText = 'Test1@gmail.com'
        const passwordText = 'Password'
        var headTitleText = 'Welcome! Please Log in.'
        var emailHeaderText = 'Email address'
        var rememberLogInText = 'Remember Login'

        testPage.userNameField.sendKeys(userNameText)
        testPage.passwordField.sendKeys(passwordText)

        //Verifying elements
        expect(testPage.emailHeader.getText()).toEqual(emailHeaderText)

        expect(testPage.userNameField.getAttribute('value')).toEqual(userNameText)
        expect(testPage.passwordField.getAttribute('value')).toEqual(passwordText)
        expect(testPage.loginTitle.getText()).toEqual(headTitleText)
        //expect(element(by.id('login-title')).getText()).toContain('Welcome!') // this is to verify partial text

        //Remember log in verify and click
        expect(testPage.rememberLogIn.getText()).toEqual(rememberLogInText)
        testPage.rememberLogInCheckbox.click()
        //Click and verifying Submit Button
        expect(testPage.submitButton.isPresent())
        testPage.submitButton.click()

    })
})

