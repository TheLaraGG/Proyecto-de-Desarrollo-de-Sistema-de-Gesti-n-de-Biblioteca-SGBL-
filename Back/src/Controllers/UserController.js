const user=require('../Models/UserModel')


const getAllUsers=async(req,res)=>{
    const users=await user.find();
    res.json(users);
}

const getUserById=async(req,res)=>{
    const id=req.params.id;
    const user=await user.findById(id);
    res.json(user);
}

const addUser=async(req,res)=>{
    const newUser=new user(req.body);
    await newUser.save();
    res.send("User Saved");
    res.json(newUser);
}

const updateUser=async(req,res)=>{
    const user=await user.findByIdAndUpdate(req.params.id,req.body)
    res.send("User Updated");
}

const deleteUser=async(req,res)=>{
    const user=await user.findByIdAndDelete(req.params.id)
    res.json({menssge:"User Deleted"});
}

module.exports={getAllUsers,getUserById,addUser,updateUser,deleteUser}