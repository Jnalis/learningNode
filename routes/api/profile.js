const express = require('express');
const router = express.Router();

//@route   GET api/profile
//@route   dec Test route
//@rout    access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;