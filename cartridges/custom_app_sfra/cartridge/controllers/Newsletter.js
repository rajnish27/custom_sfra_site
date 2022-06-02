'use strict'

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

/**
 * Checks if the email value entered is correct format
 * @param {string} email - email string to check if valid
 * @returns {boolean} Whether email is valid
 */
 function validateEmail(email) {
    var regex = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
    return regex.test(email);
}

//get method ... shortcut to use methods to check for get request. 
//in sfra the first step to create a form is to create json object to contain the form data.
//Data from the form is accessible in templates using the pdict variable

server.get('Subscribe',server.middleware.https,function(req,res,next) {
    var actionUrl = URLUtils.url('Newsletter-Submit');// sets the route to call for the form submit action
    var newsletterForm = server.forms.getForm('newsletter'); //creates empty JSON object using the form definition
    newsletterForm.clear();
    res.render('account/newsletter',{
        actionUrl:actionUrl,
        newsletterForm:newsletterForm}
    );
    next();
});

server.post('Submit',server.middleware.https,function(req,res,next){

    //after submitting form you can get form property through req.form.property name
    var nickName = req.form.nickname;

    res.render('success',{nickName:nickName});
    next();
});

module.exports = server.exports();