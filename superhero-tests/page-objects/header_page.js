var HeaderPage = function() {}

HeaderPage.prototype = Object.create({}, {
    headerTitle: {get:function(){return element(by.css('body > div.container-fluid > div:nth-child(1) > h1') ) }},
    headerImage: {get:function() {return element(by.css('body > div.container-fluid > div.row.justify-content-md-center.bg-light > img'))}},
    headerParagraph: {get:function() {return element(by.css('body > div.container-fluid > div:nth-child(3) > div.col-8 > p'))}}

})







module.exports = HeaderPage