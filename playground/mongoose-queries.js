const {ObjectId} = require('mongodb');
const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5af1b053695276cb87bd4cc6';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('todos ',todos);
// })
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('todo ',todo);
// })

// Todo.findById(id).then((todo)=>{
//     if(!todo) return console.log('id not found');
//     console.log('todo by id',todo);
// }).catch((e)=>console.log(e));


User.findById('5af4310a414f28de8c0d5f17').then((user)=>{
    if (!user) {
        return console.log('unable find user');;
    }
    console.log(JSON.stringify(user,undefined,2));
},(e) => {
    console.log(e);
});
