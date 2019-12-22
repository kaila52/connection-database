const db = require('../models/user.models')
module.exports = {
    login: (req, res, next) => {
        db.find().or([{ email: req.body.email, password: req.body.password }, { user: req.body.email, password: req.body.password }])
            .then(data => {
                if (!data) {
                    res.redirect('/login')
                    return
                } else {
                    res.cookie('id',data[0].id)
                    next()
                }
            })

    },

}