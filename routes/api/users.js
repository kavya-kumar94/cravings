const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req,res) => {
    res.json({ msg: "This is the user route"});
});

router.get("/saves", (req,res) => {
    Food.find({users: req.body.users})
    Drink.find({users: req.body.users})
})

router.get(
    '/current',
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        res.send(req.user);
    }
)

router.post('/register', (req ,res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne( { username: req.body.username })
    .then(user => {
        if (user) {
            return res.status(400).json({ username: "A user is already registered with that username"})
        } else {
            const newUser = new User({
                username: req.body.username,
                age: req.body.age,
                password: req.body.password
            })

            // newUser.save().then(user => res.send(user)).catch(err => res.send(err));
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save();
                        // .then((user) => res.json(user))
                        // .catch(err => console.log(err))
                })
            })
            const payload = {
                id: newUser.id,
                username: newUser.username,
                age: newUser.age
            }
            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
        .then(user => {
            if(!user) {
                return res.status(404).json({ username: "This user does not exist." });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            age: user.age
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );

                    } else {
                        return res.status(400).json({ password: "Incorrect password"});
                    }
                })
        })
})

module.exports = router;