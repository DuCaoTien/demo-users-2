const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({_id : new ObjectID("5c7d572ebc32053b385a68d6")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({name : 'Cao Tien'}).count((error, count)=> {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(count);
    // })

    // db.collection('task').findOne({ _id: new ObjectID('5c7cf5b23ddbf01084e095ad') }, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(task);
    // });

    // db.collection('task').find({ completed: false }).toArray((error, task) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(task);
    // })

//    db.collection('users').updateOne({
//         _id: new ObjectID('5c7ce9e40c526204444f2230'),
//     }, {
//         $set: {
//             name : 'Tai Cho Dien'
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     });

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