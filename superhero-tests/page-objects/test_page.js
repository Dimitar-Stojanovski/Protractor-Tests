var TestPage = function () {}

TestPage.prototype = Object.create({}, {
    //emailField: {get: function () {return element(by.id('loginEmail')) } }
    userNameField: {
        get: function(){return element(by.id('loginEmail'))}
    },
    
    passwordField:{
        get: function() {return element(by.id('loginPassword'))}
    },

    loginTitle:{
        get: function() {return element(by.id('login-title'))}
    },

    emailHeader: {
        get: function () {return element(by.css('#form-login > div:nth-child(1) > label'))}
    },

    submitButton : {
        get: function() {return element(by.buttonText('Submit'))}
    }, 

    rememberLogIn: {
        get: function() {return element(by.css('#form-login > div.mb-3.form-check > label'))}
    },

    rememberLogInCheckbox: {
        get: function() {return element(by.id('rememberLoginCheck'))}
    }






})

module.exports = TestPage