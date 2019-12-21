const express = require('express');
const app = express()
const path = require('path')
const port = 3000

const dbUser = require('./models/user.models');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var cardsRouter = require('./routes/cards');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/users', loginRouter);
app.use('/cards', cardsRouter);

app.listen(port,()=>{
    console.log(`listen on ${port}`);
})