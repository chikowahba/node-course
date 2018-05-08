// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongdb sever');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5ac4c5a0ef76065ebfb8903b")
    },{
        $set: {
            completed : false
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
