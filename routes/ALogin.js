var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function(req, res) { 
    res.render('ALogin');
});

router.post('/', function(req, res) {
    db.query('select admin_name, admin_pass from admin', function(err, result) {
        console.log(result[0].admin_name);
        console.log(result[0].admin_pass);
        if (result[0].admin_name == req.body.name && result[0].admin_pass == req.body.pass)
        {
            console.log('Success')
            res.redirect('AdminPanel')
        } else
        {
            console.log('fail')
            res.redirect('back')
        }
    });
    
})


module.exports = router;