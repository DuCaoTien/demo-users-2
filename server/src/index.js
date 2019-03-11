const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');
const userRouter = require('./routers/user');


const app = express();
const port = process.env.Port || 3000;

app.use(express.json())

// Add headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(userRouter);

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send()
    }

})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log('Server is up on port', port);
})