const db = require('../models/user.models')
module.exports = {
    login: (req, res, next) => {
        if(req.cookies.id){
            res.redirect('/')
        }else{
            res.render('login')
        } 
    },
    index: (req, res, next) => {
        res.redirect('/')
    }

}