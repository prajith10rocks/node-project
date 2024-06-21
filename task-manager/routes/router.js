const express = require('express');
const router = express.Router();
router.get('/',(req,res) => {
    res.render('home');
});
router.get('/home',(req,res) =>{
    res.render('home')
});
router.get('/login',(req,res) =>{
    res.render('login')
});
router.post('login',(req,res) =>{

});
router.get('/signup',(req,res) =>{
    res.render('signup')
});
module.exports = router;