var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/', function(req, res) {
    res.render('Register');
});

router.post('/', function(req, res) {
    var namae = req.body.name;
    console.log(namae);
    if (namae == '' || req.body.phone == '' || req.body.email == '' || req.body.gender == '')
    {
        res.redirect('back');

    } else 
    { 
        sql = "INSERT INTO patient (name, phone, email, gender) values ?"
        value = [
            [req.body.name, req.body.phone, req.body.email, req.body.gender]
        ]

        db.query(sql,[value] ,function(err, result) {
            if (err) throw err;
            console.log("Success");
        });

        res.redirect('/Confirm');
    }
});
module.exports = router;