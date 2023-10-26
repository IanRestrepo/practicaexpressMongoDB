const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User.schema.js');
const bcrypt = require('bcrypt');

router.post('/users', (req, res) => {

    try {
        const { userName, passWord, userEmail } = req.body;
        const hashedPassword = bcrypt.hashSync(req.body.passWord, 10);

        const newUser = new UserSchema({
            userName,
            passWord: hashedPassword,
            userEmail
        }).save()

        res.json(newUser);
    } catch {
        res.status(500).json({ message: 'Error while trying to create a new user' });
    }

});

router.get('/users', (req, res) => {
    UserSchema.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: `Error while trying to get all users: ${err}` }));
});

module.exports = router;