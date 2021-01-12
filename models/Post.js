const { model , Schema } = require("mongoose")

const postSchema = new Schema({
    body:String,
    username:String,
    comments:[
        {
            body:String,
            username:String,
            time : { type : Date, default: Date.now }
        }
    ],
    likes:[
        {
            username:String,
            time : { type : Date, default: Date.now }
        }
    ],
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
},{timestamps: true});

module.exports = model('Post' ,postSchema);