const User = require("../models/user_model");
const bcrypt = require("bcryptjs");


async function getUser(req, res){
    try{
    const userData = await User.find({}).select({name: 1, _id: 1, phone: 1})
    res.send(userData);
    }catch(e){
        res.send(e);
    }
}

async function register (req, res){
    console.log(req.body);
    const user = new User(req.body);
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.send(e);
    })
}

async function login(req, res){
    console.log(req.body)
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email});
      
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(` Password matched ${isMatch}`);
        if( isMatch ){
            res.status(200).json({"status": "Authorised", "userId": user._id, 'username': user.name });
            
        }else{
            res.status(401).send("Invalid Credentials");
        }
    }catch(error){
        res.status(401).send("Invalid Credentials")
    }
}

module.exports = {
    getUser,login,register
}