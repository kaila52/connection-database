const db = require('../models/user.models')

module.exports = {
    checkUser: (req, res, next) => {
        db.find().or([{ email: req.body.email },{ user: req.body.user }])
        .then(data => {
            if (!data) {
                // can viet ajax : user or mail da duoc su dung
                res.redirect('/register')
                return
            } else {
                next()
            }
        })
    }
}