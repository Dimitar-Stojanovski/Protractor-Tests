const { Browser } = require('selenium-webdriver')
var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page')


describe('Roster Page Tests', function(){

    var rosterPage 
    var url = 'file:///C:/Users/Dimitar/Documents/QA%20testing/Javascript%20Protactor%20Jason%20Meyers%20Udemy/protractor/superhero/index.html'
    
        beforeEach(function(){
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
    
        browser.ignoreSynchronization = true

        browser.get(url)
        
 })

    
    afterEach(function(){
        browser.sleep(2000)

    })


    it('should display all roster elements', function(){
        loginPage.userNameInput.sendKeys('username@mail.com')
        loginPage.passwordInput.sendKeys('password')
        loginPage.rememberMeCheckBoxButton.click()
        loginPage.submitButton.click()

    expect(rosterPage.rosterTitle.isPresent()).toBe(true)
    expect(rosterPage.rosterTitle.getText()).toEqual('Build your Superhero Roster:')

    expect(rosterPage.wolverineItemTXT.isPresent()).toBe(true)
    expect(rosterPage.wolverineItemTXT.getText()).toEqual('Wolverine')

    expect(rosterPage.ironManItemTxt.isPresent()).toBe(true)
    expect(rosterPage.ironManItemTxt.getText()).toEqual('Iron Man')
    
    expect(rosterPage.deadpoolItemTxt.isPresent()).toBe(true)
    expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool')

    expect(rosterPage.thorItemTxt.isPresent()).toBe(true)
    expect(rosterPage.thorItemTxt.getText()).toEqual('Thor')

    expect(rosterPage.spidermanItemTxt.isPresent()).toBe(true)
    expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spiderman')

    expect(rosterPage.rosterFieldLabel.isPresent()).toBe(true)
    expect(rosterPage.heroInputField.isPresent()).toBe(true)
    expect(rosterPage.submitButton.isPresent()).toBe(true)

    })

    it('Should add another hero after clicking submit', function(){
        loginPage.userNameInput.sendKeys('username@mail.com')
        loginPage.passwordInput.sendKeys('password')
        loginPage.rememberMeCheckBoxButton.click()
        loginPage.submitButton.click()

        rosterPage.heroInputField.sendKeys('Batman')
        rosterPage.submitButtonForInsertingHero.click()
    

    })

   


})