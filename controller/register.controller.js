const db = require('../models/user.models')
module.exports = {
    register: (req, res, next) => {
        res.render('register')
    },
    createUser: (req, res, next) => {
        db.create({
            fullname: req.body.fullname,
            user: req.body.user,
            email: req.body.email,
            password: req.body.password,
        })
        res.redirect('/login')
    }
}