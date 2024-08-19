const User= require('../models/User');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const generateToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET,{
        expiresIn:'30d',
    });
};

exports.registerUser=async(req,res)=>{
    const {email,password,role}=req.body;
    try{
        const user=await User.create({email,password,role});
        const token=generateToken(user._id,user.role);
        res.status(201).json({token, role:user.role});
    }
    catch(err){
        res.status(400).json({error:'User registration failed'});
    }
};

exports.loginUser=async (req,res)=>{
    const{email, password}=req.body;
    try{
        const user=await User.findOne({email});
        if(user && (await user.matchPassword(password))){
            const token = generateToken(user._id,user.role);
            res.status(200).json({token,role:user.role});
        }
        else{
            res.status(401).json({error:'Invalid credentials'});
        }
    }
    catch(error){
        res.status(500).json({error:"Server error"})
    }
}