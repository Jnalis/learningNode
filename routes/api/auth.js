const express = require('express');
const router = express.Router();

//@route   GET api/auth
//@route   dec Test route
//@rout    access Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;