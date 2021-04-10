var LoginPage = function () {}

LoginPage.prototype = Object.create({}, {

    headerPage:{
        get: function (){return element(by.id('login-title'))}
    },

    emailAddressLabel : {
        get: function(){return element(by.css('#form-login > div:nth-child(1) > label'))}
    },

    userNameInput: {
        get: function() {return element(by.id('loginEmail'))}
    },

    passwordLabel :{
        get: function(){return element(by.css('#form-login > div:nth-child(2) > label'))}
    },

   passwordInput : {
       get:function() {return element(by.id('loginPassword'))}
   },
   
   rememberLoginLabel: {
       get: function() {return element(by.css('#form-login > div.mb-3.form-check > label'))}
   },

   rememberMeCheckBoxButton:{
       get: function() {return element(by.id('rememberLoginCheck'))}
   },

   submitButton : {
       get: function() {return element(by.buttonText('Submit'))}
   },

   loginAlert :{
       get: function() {return element(by.id('login-alert'))}
   },

   superHeroPageTitle : {
       get: function() {return element(by.css('body > div.container-fluid > div:nth-child(1) > h1'))}
   }





})

module.exports = LoginPage