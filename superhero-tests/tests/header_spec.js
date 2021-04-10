var LoginPage = require('../page-objects/login_page.js')
var HeaderPage = require('../page-objects/header_page.js')

const header_page = require('../page-objects/header_page')
describe('Header Page Tests', function(){
    var headerPage
    
    beforeEach(function() {
        browser.ignoreSynchronization = true 
        headerPage = new HeaderPage()
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

    
    
    
    it('should verify the presence of the elements', function(){
        expect(headerPage.headerTitle.isDisplayed()).toBe(true)
        expect(headerPage.headerImage.isDisplayed()).toBe(true)
        expect(headerPage.headerParagraph.isDisplayed()).toBe(true)
        

    })

    it('should retrieve the text from the header and paragraph', function(){
        var paragraphText = 
        'Imagine that you are tasked with building your superheroes to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.'
      


        expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster')
        expect(headerPage.headerParagraph.getText()).toEqual(paragraphText)
    })
})