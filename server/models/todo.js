var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo' , {
    text : {
        type: String,
        required:true,
        minlength:1,
        trim:true
    },
    completed : {
        type: Boolean,
        default:false
    },
    completedAt : {
        type: Number,
        default:null
    }
});

// var newTodo =  new Todo ({
//     text : 'good'
// });

// newTodo.save().then((doc)=>{
//     console.log('user saved' , doc);
// },(e)=> {
//     console.log(e);
// })
// newTodo.save().then((doc)=>{
//     console.log('good' , doc);
// },(e)=> {
//     console.log(e);
// })

module.exports = {Todo};
