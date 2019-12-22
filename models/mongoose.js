const db = require('./user.models')

// db.create([
//     {
//         email: "thuan@gmail.com",
//         password: "12345"
//     },
//     {
//         email: "admin@gmail.com",
//         password: "12345"
//     }
// ])

db.find({}).then((data) => {
    console.log(data);
})
// db.remove({email: 'admin@gmail.com'}).then(()=>{
//     console.log('ok');
// })

