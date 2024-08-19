const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        enum:['admin','organizer','user'],
        default: 'user'
    },
    isActive:{
        type:Boolean,
        default:true,
    }
});
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
    next();
});
UserSchema.methods.matchPassword=async function (enterPassword) {
    return await bcrypt.compare(enterPassword,this.password);
    
};
module.exports=mongoose.model('User',UserSchema);