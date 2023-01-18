const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must have a name" ],
        minlength:4
    },

   
    
    email: {
        type: String,
        required: [true, "Email must be present"],
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },

    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        unique: true,
        required: [true, "Phone number must be present" ],
    },


    password: {
        type: String,
        required: [true, "Please give password" ],
        validate:{
                validator: (value)=>{
                re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
                return re.test(value)
            },
        }
    },

    confirm_password: {
        type: String,
        required: true
    },

   
}, {timestamps: true})
userSchema.pre("save", async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirm_password = this.password;
    }
    next();
} )


const User = new mongoose.model("user",userSchema);

module.exports = User