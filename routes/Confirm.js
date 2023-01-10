var express = require('express');
var router = express.Router();
var db = require('../database');

console.log('result');


router.get('/', function(req, res) {
    db.query('select * from patient ORDER BY ticket DESC LIMIT 1;', function(err, result) {
        if (err) {
            console.log(result);
            req.flash('error', err)
            res.render('Confirm', { data: ''})
        } else {
            console.log(result);
            res.render('Confirm', {action:'add' , data:result})
        }
    });
});

router.post('/', function(req, res) {
    res.redirect('home');
});

module.exports = router;