// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongdb sever');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ac4b5cdc697e8159831f718')
    //
    // }).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fatch',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`todos count : ${count}` );
    },(err)=>{
        console.log('unable to fatch',err);
    });

    // db.close();
});
