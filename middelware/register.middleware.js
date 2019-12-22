const db = require('../models/user.models')

module.exports = {
    checkUser: (req, res, next) => {
        db.find({ email: req.body.email }).then(data => {
            if (data.length == '0') {
                next()
            } else {
                res.redirect('/register')
                return
            }
        })
    }
}