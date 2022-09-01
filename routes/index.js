
const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/', auth.authReq, (req,res) => {

   
    res.render('index', {
        user: req.user
    })
})


module.exports = router;
