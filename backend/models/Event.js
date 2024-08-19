const mongoose= require('mongoose');
const EventSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    organizer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    attendees:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    ],
    isDeleted:{
        type:Boolean,
        default:false,
    },
});
module.exports=mongoose.model('Event',EventSchema);