require('../src/db/mongoose');
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c7e3a72c0f3532a9c28424d', {
// }).then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5c7e9ca45ace0c5304b3dad2').then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
})