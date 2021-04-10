//Test for Login

//Define Page Objects
const { Browser } = require('selenium-webdriver');
var LoginPage = require('../page-objects/login_page')

describe('Log in Page tests', function () {
    var loginPage
    var url = 'file:///C:/Users/Dimitar/Documents/QA%20testing/Javascript%20Protactor%20Jason%20Meyers%20Udemy/protractor/superhero/index.html'
    var alertMessage= 'An e-mail and password are required!'
    const password = 'Password'
    const username = 'username1@gmail.com'
    var headerPageTitle = 'Superhero Roster'

    beforeEach(function () {
        loginPage = new LoginPage();

        //Since this is not an Angular Page
        browser.ignoreSynchronization = true
        
        //Open browser
        browser.get(url)

        })

    afterEach(function () {
        browser.sleep(3000)
     })

    it('Should display all log in elements', function () {
        var headerText = 'Welcome! Please Log in.'

        expect(loginPage.headerPage.isDisplayed()).toBe(true)
        expect(loginPage.headerPage.getText()).toBe(headerText)
         
         expect(loginPage.emailAddressLabel.isDisplayed()).toBe(true)
         expect(loginPage.userNameInput.isDisplayed()).toBe(true)
         expect(loginPage.userNameInput.getText()).toBe('')
        
         expect(loginPage.passwordLabel.isDisplayed()).toBe(true)
         expect(loginPage.passwordInput.isDisplayed()).toBe(true)
         expect(loginPage.passwordInput.getText()).toBe('')
        
         expect(loginPage.rememberLoginLabel.isDisplayed()).toBe(true)
         expect(loginPage.rememberMeCheckBoxButton.isDisplayed()).toBe(true)
         expect(loginPage.rememberMeCheckBoxButton.isSelected()).toBe(false)
        
         expect(loginPage.submitButton.isDisplayed()).toBe(true)

    })

    it('Should display error messages with no credentials entered', function () {
        

        loginPage.submitButton.click()
        expect(loginPage.loginAlert.isPresent()).toBe(true)
        expect(loginPage.loginAlert.getText()).toBe(alertMessage)


    })

    it('should display message when no password is entered', function () {
        

        loginPage.userNameInput.sendKeys(username)
        loginPage.submitButton.click()
        expect(loginPage.loginAlert.isPresent()).toBe(true)
        expect(loginPage.loginAlert.getText()).toBe(alertMessage)


    })

    it('should display message when no username is inserted', function () {
        loginPage.passwordInput.sendKeys(password)
        loginPage.submitButton.click()
        expect(loginPage.loginAlert.isPresent()).toBe(true)
        expect(loginPage.loginAlert.getText()).toBe(alertMessage)



    })

    it('should log user in', function () {
        loginPage.userNameInput.sendKeys(username)
        loginPage.passwordInput.sendKeys(password)
        loginPage.rememberMeCheckBoxButton.click()
        loginPage.submitButton.click()
        expect(loginPage.superHeroPageTitle.isDisplayed()).toBe(true)
        expect(loginPage.superHeroPageTitle.getText()).toBe(headerPageTitle)



    })

   

})