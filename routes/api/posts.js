const express = require('express');
const router = express.Router();

//@route   GET api/Posts
//@route   dec Test route
//@rout    access Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;