var RosterPage = function() {}

RosterPage.prototype = Object.create({}, {

    rosterTitle: {
        get: function() {return element(by.css('body > div.container-fluid > div:nth-child(3) > div:nth-child(2) > h3'))}
    },

    wolverineItemTXT: {
        get: function() {return element(by.css('#hero-list > li:nth-child(1)'))}
    },

    ironManItemTxt: {
        get: function() {return element(by.css('#hero-list > li:nth-child(2)'))}
    },

    deadpoolItemTxt: {
        get: function() {return element(by.css('#hero-list > li:nth-child(3)'))}
    },

    thorItemTxt: {
        get: function() {return element(by.css('#hero-list > li:nth-child(4)'))}
    },

    spidermanItemTxt: {
        get: function() {return element(by.css('#hero-list > li:nth-child(5)'))}
    },

    rosterFieldLabel: {
        get: function() {return element(by.css('#addHero-form > div > label'))}
    },

    heroInputField: {
        get: function() {return element(by.id('heroInput'))}
    },

    submitButtonForInsertingHero: {
        get: function() {return element(by.css('#addHero-form > div > button'))}
    }

})


module.exports = RosterPage