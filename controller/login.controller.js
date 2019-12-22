module.exports = {
    login: (req, res, next) => {
        res.render('login')
    },
    index: (req, res, next) => {
        res.redirect('/')
    }

}