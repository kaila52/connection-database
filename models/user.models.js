const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbAadmin:12345@cluster0-rh8vg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    fullname:String,
    user:String,
    email: String,
    password: String,
})

const User = mongoose.model('users', userSchema)

module.exports = User;


