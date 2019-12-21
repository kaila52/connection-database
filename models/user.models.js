const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbAadmin:12345@cluster0-rh8vg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const User = mongoose.model('users', userSchema)

module.exports = User;










// User.create([
//     {
//         email: "thuan@gmail.com",
//         password: "12345"
//     },
//     {
//         email: "admin@gmail.com",
//         password: "12345"
//     }
// ])

// User.find().then((data)=>{
//     console.log(data);
// })
// User.remove({email: 'admin@gmail.com'}).then(()=>{
//     console.log('ok');
// })

