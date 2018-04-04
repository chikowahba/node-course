// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongdb sever');

    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed: false
    //
    // },(err,result)=>{
    //     if (err) {
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name:'chiko',
    //     age: 29,
    //     location:'tel-aviv'
    // },(err,result)=>{
    //     if (err) {
    //         console.log('unable to insert user',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.close();
});
