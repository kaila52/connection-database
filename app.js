const express = require('express');
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')
const port = 3000

const dbUser = require('./models/user.models');

const indexRouter = require('./router/index');
const loginRouter = require('./router/login');
const cardsRouter = require('./router/cards');
const registerRouter = require('./router/register');
const middleware = require('./middelware/auth.middleware')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/',middleware.auth, indexRouter);
app.use('/cards',middleware.auth, cardsRouter);


app.listen(process.env.PORT||port, () => {
    console.log(`listen on ${port}`);
})
