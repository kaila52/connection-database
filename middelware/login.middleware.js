const db = require('../models/user.models')
module.exports = {
    login: (req, res, next) => {
        db.find().or([{ email: req.body.email, password: req.body.password }, { user: req.body.email, password: req.body.password }])
            .then(data => {
                if (data.length) {
                    res.cookie('id', data[0].id)
                    next()
                } else {
                    res.json('Wrong email or password !')
                    return
                }
            })

    },

}