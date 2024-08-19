const User= require('../models/User');


exports.getAllUsers=async (req,res)=>{
    try{
        const users=await User.find().select('-password');
        
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({error:'Server error'});
    }
};

exports.getUserById=async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user){
           
            res.status(404).json({message:'User disabled'});
        }
        else{
            res.status(200).json({error:'User not found'});
        }
    }
    catch(error){
        res.status(500).json({error:"Server error"})
    }
}

exports.disableUser=async (req,res)=>{
    const{email, password}=req.body;
    try{
        const user=await User.findById(req.params.id);
        if(user){
            user.isActive=false;
            await user.save()
            res.status(200).json({message:'User disabled'});
        }
        else{
            res.status(404).json({error:'User not found'});
        }
    }
    catch(error){
        res.status(500).json({error:"Server error"})
    }
}