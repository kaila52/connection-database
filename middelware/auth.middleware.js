const db = require('../models/user.models')
module.exports = {
    auth: (req, res, next) => {
        if (!req.cookies.id) {
            res.redirect('/login')
            return
        }
        db.find({ 'id': req.cookies.id }).then(data => {
            if (!data) {
                res.redirect('/login')
            }
            next()
        })

    }
}