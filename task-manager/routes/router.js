const express = require('express');
const router = express.Router();
router.get('/',(req,res) => {
    res.render('Home');
});
router.get('/home')
module.exports = router;