const { By } = require("selenium-webdriver")

var NavPage = function(){}

NavPage.prototype= Object.create({},{
    homeLink: {get: function() {return element(by.linkText('Home') ) } },
    linkLink: {get: function() {return element(by.linkText('Link') ) } },
    heroFacts: {get: function() {return element(by.linkText('Hero Facts') ) } },
    logOut: {get: function() {return element(by.linkText('Logout'))}},
    wolverineOption: {get: function() {return element(by.linkText('Wolverine'))}},
    spiderManOption: {get: function() {return element(by.linkText('Spiderman'))}},
    thorOption: {get: function() {return element(by.linkText('Thor'))}},
    deadpoolOption: {get: function() {return element(by.linkText('Deadpool'))}},
    ironManOption: {get: function() {return element(by.linkText('Iron Man'))}},


    wolverineModal : {get:function(){return element(by.id('wolverinemodalLabel'))}},
    wolverineFacts: {get:function() {return element(by.css('#wolverinemodal > div > div > div.modal-body'))}},
    spidermanModal: {get: function(){return element(by.id('spidermanmodalLabel'))}},
    spidermanModalBody: {get:function(){return element(by.css('#spidermanmodal > div > div > div.modal-body'))}},

    searchField: {get: function(){return element(by.id('search-box'))}},
    searchButton: {get: function(){return element(by.css('#search-form > button'))}}
})

module.exports= NavPage