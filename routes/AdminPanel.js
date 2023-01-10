var express = require('express');
var router = express.Router();
var db = require('../database');

console.log('result');


router.get('/', function(req, res) {
    db.query('select * from patient ORDER BY ticket DESC LIMIT 1;', function(err, result) {
        if (err) {
            console.log(result);
            req.flash('error', err)
            res.render('AdminPanel', { data: ''})
        } else {
            console.log(result);
            res.render('AdminPanel', {action:'add' , data:result})
        }
    });
});

module.exports = router;