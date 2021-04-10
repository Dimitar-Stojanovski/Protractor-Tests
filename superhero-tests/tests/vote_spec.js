
var LoginPage = require('../page-objects/login_page')
var votePage = require('../page-objects/vote_page')
describe('Vote Page Tests', function () {
    
    

    beforeEach(function () {
        loginPage = new LoginPage()
        
        
        var url = 'file:///C:/Users/Dimitar/Documents/QA%20testing/Javascript%20Protactor%20Jason%20Meyers%20Udemy/protractor/superhero/index.html'
        var voteHeaderTitle = 'Vote for your Superhero:'

        browser.ignoreSynchronization = true
        //open URL
        browser.get(url)
        //browser.manage().window().maximize()
        
        

        
        
       })

    afterEach(function () {
        browser.sleep(3000)

    })

    it('should display all elements', function(){
        loginPage.userNameInput.sendKeys('username@gmail')
        loginPage.passwordInput.sendKeys('password')
        loginPage.rememberMeCheckBoxButton.click()
        loginPage.submitButton.click()
        
        expect(votePage.getVoteHeaderTitle()).toEqual('Vote for your Superhero:')
        expect(votePage.getXmanRadioBtn()).toBe(true)
        expect(votePage.getAvengersRadioBtn()).toBe(true)
        expect(votePage.getSpidermanRadioBtn()).toBe(true)
        expect(votePage.getDeadpoolRadioBtn()).toBe(true)
        expect(votePage.getIronmanRadioBtn()).toBe(true)
        expect(votePage.getSubmitButton()).toBe(true)
        


    })

    it('should add a vote to X- man while the radio button is selected', function(){
        
        votePage.clickOnXmanBtn()
        votePage.clickSubmitVoteBtn()
        expect(votePage.getAlert()).toBe('Thanks for voting!')

        
     })

    it('should add a vote to Avengers', function(){
        votePage.clickOnAvengersbutton()
        votePage.clickSubmitVoteBtn()
        expect(votePage.getAlert()).toBe('Thanks for voting!')
        
    })

    it('shoud add a vote to Deadpool', function(){
        votePage.clickOnDeadpoolBtn()
        votePage.clickSubmitVoteBtn()
        expect(votePage.getAlert()).toBe('Thanks for voting!')
        
    })

    it('should add a vote to Spiderman', function(){
        votePage.clickONSpidermanBtn()
        votePage.clickSubmitVoteBtn()
        expect(votePage.getAlert()).toBe('Thanks for voting!')
    })

    it('should add a vote to Ironman', function(){
        votePage.clickOnIronmanBtn()
        votePage.clickSubmitVoteBtn()
        expect(votePage.getAlert()).toBe('Thanks for voting!')
    })



})