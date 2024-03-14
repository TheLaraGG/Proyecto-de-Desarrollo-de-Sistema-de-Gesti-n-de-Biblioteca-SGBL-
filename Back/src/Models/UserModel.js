const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    nickname:String,
    email:String,
    password:String
});
module.exports=mongoose.model("usuarios",userSchema)