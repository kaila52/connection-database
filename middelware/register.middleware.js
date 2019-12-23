const db = require('../models/user.models')

module.exports = {
    checkUser: (req, res, next) => {
        db.find().or([{ email: req.body.email }, { user: req.body.user }])
            .then(data => {
                if (data.length == '0') {
                    next()
                } else {
                    //  user or mail da duoc su dung
                    if(data[0].user == req.body.user){
                        res.json('This user already exists !')
                    }else{
                        res.json('This email already exists !')
                    }
                    return
                }
            })
    }
}