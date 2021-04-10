var LoginPage = require('../page-objects/login_page')
var NavPage = require('../page-objects/nav_page')

describe('Navigation Page Tests', function(){
    var navPage 

    beforeEach(function(){
        browser.ignoreSynchronization = true 
        navPage = new NavPage()
        loginPage = new LoginPage()
        var url = 'file:///C:/Users/Dimitar/Documents/QA%20testing/Javascript%20Protactor%20Jason%20Meyers%20Udemy/protractor/superhero/index.html'
        //open URL
        browser.get(url)
        //browser.manage().window().maximize()
        
        loginPage.userNameInput.sendKeys('username@gmail')
        loginPage.passwordInput.sendKeys('password')
        loginPage.rememberMeCheckBoxButton.click()
        loginPage.submitButton.click()
    })

    afterEach(function(){
        browser.sleep(2000)
    })

    it('should display all elements to be present', function(){
        expect(navPage.homeLink.isDisplayed()).toBe(true)
        expect(navPage.linkLink.isDisplayed()).toBe(true)
        expect(navPage.heroFacts.isDisplayed()).toBe(true)
        expect(navPage.logOut.isDisplayed()).toBe(true)


    })

    it('should display all the elements in the Hero Facts', function(){
        navPage.heroFacts.click()
        expect(navPage.wolverineOption.isDisplayed()).toBe(true)
        expect(navPage.spiderManOption.isDisplayed()).toBe(true)
        expect(navPage.thorOption.isDisplayed()).toBe(true)
        expect(navPage.deadpoolOption.isDisplayed()).toBe(true)
        expect(navPage.ironManOption.isDisplayed()).toBe(true)
    }) 

    it('should click on Wolvarine modal and verify the elements', function(){
        navPage.heroFacts.click()
        navPage.wolverineOption.click()
        expect(navPage.wolverineModal.getText()).toEqual('Wolverine Facts')
        expect(navPage.wolverineFacts.getText()).toEqual('Wolverine made his first commic book appearance in 1974.')


    })

    it('should click on Spiderman modal and verify the elements', function(){
        navPage.heroFacts.click()
        navPage.spiderManOption.click()
        expect(navPage.spidermanModal.getText()).toEqual('Spiderman Facts')
        expect(navPage.spidermanModalBody.getText()).toEqual('Spiderman was created by Stan Lee and Steve Ditke and first appeared in 1962.')
    })

    it('should log in and log out and verify that the log in fields are empty', function(){
        navPage.logOut.click()
        expect(loginPage.userNameInput.getText()).toEqual('')
        expect(loginPage.passwordInput.getText()).toEqual('')
    })

    it('should log in and log out and verify that the log in fields are remembered', function(){
        navPage.logOut.click()
        expect(loginPage.userNameInput.getAttribute('value')).toEqual('username@gmail')
        expect(loginPage.passwordInput.getAttribute('value')).toEqual('password')
        expect(loginPage.rememberMeCheckBoxButton.isSelected()).toBe(true)
    })

    it('should display alert for not found', function(){
        navPage.searchField.sendKeys('Bob')
        navPage.searchButton.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 2000)
        expect(browser.switchTo().alert().getText()).toEqual('Your search forBobreturned 0 results. Try something else')
        browser.switchTo().alert().accept()
    })

    fit('should display alert for found', function(){
        navPage.searchField.sendKeys('wolverine')
        navPage.searchButton.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 2000)
        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome')
        browser.switchTo().alert().accept()
        
    })
})