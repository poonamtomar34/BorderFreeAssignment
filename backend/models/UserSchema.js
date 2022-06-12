const Mongoose = require("mongoose")
const Validator = require("validator")

const userSchema = new Mongoose.Schema(
   {
    name:{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
        unique:true,
        validate(val) {
            if (!Validator.isEmail(val)) {
              throw new Error("Please enter a valid email");
            }
          },
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
}
)
const User = new Mongoose.model('user',userSchema)

module.exports = User