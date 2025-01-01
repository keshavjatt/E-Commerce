const { default: mongoose } = require('mongoose')
const momgoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email :{
        type : String,
        unique : true,
        required : true
    },
    password : String,
    profilePic : String,
    role : String,
}, {
    timestaps : true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel