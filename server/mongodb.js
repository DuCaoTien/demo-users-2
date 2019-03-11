const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('task').updateMany({
        completed: false,
    }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
})