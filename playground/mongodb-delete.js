// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongdb sever');

    // deleteMany

    db.collection('Todos').deleteMany({text:'eat'}).then((result)=>{
        console.log(result);
    });

    // db.close();
});
