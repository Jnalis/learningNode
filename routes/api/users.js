const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator/check');

//@route   POST api/Users
//@route   Register Users
//@rout    access Public
router.post('/', [
        check('name', 'Name is Require')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a valid password with 6 or more characters').isLength({
            min: 6
        })
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        res.send('User route');
    });

module.exports = router;