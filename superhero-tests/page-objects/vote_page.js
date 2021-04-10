const { By, Browser } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const { get } = require("selenium-webdriver/http");

var VotePage= function(){

    var voteHeaderTitle = element(By.css('body > div.container-fluid > div:nth-child(3) > div:nth-child(3) > div.row.justify-content-md-center > div > h4'))

    var xmanRadioBtn = element(By.id('heroMovieRadio1'))
    var avengersRadioBtn = element(By.id('heroMovieRadio2'))
    var deadPoolRadioBtn = element(By.id('heroMovieRadio3'))
    var spidermanRadioBtn = element(By.id('heroMovieRadio4'))
    var ironmanRadioBtn = element(By.id('heroMovieRadio5'))
    var voteSubmitButton = element(By.id('submit-vote'))
    var movieDisplays = element.all(By.xpath("/html/body/div[3]/div[3]/div[3]/div[2]/div/table/tbody/tr"))
    var voteAlert = element(By.id('vote-alert'))

    this.getXmanRadioBtn = function(){
        return xmanRadioBtn.isDisplayed()
        
    }

    this.getAvengersRadioBtn = function(){
        return avengersRadioBtn.isDisplayed()
        
    }

    this.getDeadpoolRadioBtn = function(){
        return deadPoolRadioBtn.isDisplayed()
        
    }

    this.getSpidermanRadioBtn = function(){
        return spidermanRadioBtn.isDisplayed()
        
    }

    this.getIronmanRadioBtn = function(){
        return ironmanRadioBtn.isDisplayed()
        
    }

    this.getVoteHeaderTitle = function(){
        return voteHeaderTitle.getText()
    }

    this.getSubmitButton = function(){
        return voteSubmitButton.isDisplayed()
    }

    this.getMovieTable =function(index){
        return movieDisplays.get(index)
    }

    this.clickOnXmanBtn = function(){
        xmanRadioBtn.click()
    }

    this.clickSubmitVoteBtn = function(){
        
           voteSubmitButton.click()
        
    }

    this.getAlert = function(){
        return voteAlert.getText()
}

    this.clickOnAvengersbutton = function(){
        avengersRadioBtn.click()
    }

    this.clickOnDeadpoolBtn = function(){
        deadPoolRadioBtn.click()
    }

    this.clickONSpidermanBtn = function(){
        spidermanRadioBtn.click()
    }

    this.clickOnIronmanBtn = function(){
        ironmanRadioBtn.click()
    }

}

module.exports= new VotePage();