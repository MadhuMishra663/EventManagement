const User= require('../models/User');
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded =jwt.verify(token,process.env.JWT_SECRET);
            req.user= await User.findById(decoded.id).select('-password');
            if(!req.user.isActive){
                return res.status(403).json({error: 'User is disabled'});
            }
            next();
        }
        catch(err){
            res.status(401).json({error:'No token generated'});
        }
    }
   
};

exports.admin= (req,res,next)=>{
    if(req.user.role!=='admin'){
      return res.status(403).json({error:"Admin access only"});
    }
    next();
    
}
exports.organizer= (req,res,next)=>{
    if(req.user.role!=='organizer' && req.user.role!=='admin'){
        return res.status(403).json({error:"Organizer access only"});
      }
      next();
   
}