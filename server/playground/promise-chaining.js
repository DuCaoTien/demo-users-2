require('../src/db/mongoose')
const User = require('../src/models/users')

//5c7e40731f37292b547abf86

User.findByIdAndUpdate('5c7e40731f37292b547abf86', {
    age : 1
}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})