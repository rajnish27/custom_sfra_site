"use strict"

var server=require('server');

// server.get('Get',function(req,res,next) {
//     var cid = req.querystring.cid;
//     res.render('customer.isml',{cid:cid});
//     next();
// });

server.get('Get',function(req,res,next){
    res.json({value:"Hello world"});
    next();
});

module.exports = server.exports();