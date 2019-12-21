const express = require('express');
const app = express()
const path = require('path')
const port = 3000

const dbUser = require('./models/user.models');

var indexRouter = require('./router/index');
var loginRouter = require('./router/login');
var cardsRouter = require('./router/cards');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/cards', cardsRouter);

app.listen(port,()=>{
    console.log(`listen on ${port}`);
})