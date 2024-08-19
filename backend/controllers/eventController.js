const User= require('../models/Event');




exports.createEvent=async(req,res)=>{
    const {title, description, date}=req.body;
    try{
        const event=await event.create({
            title,
            description,
            date,
            organizer: req.user.id,
        });
        
        res.status(201).json(event);
    }
    catch(err){
        res.status(400).json({error:'event creation failed'});
    }
};

exports.getAllEvents=async (req,res)=>{
    const{email, password}=req.body;
    try{
        const events=await Event.find({isDeleted: false}).populate('organizer','email');
        
            res.status(200).json(events);
        
    }
    catch(error){
        res.status(500).json({error:"Server error"})
    }
}
exports.deleteEvent=async (req,res)=>{
    const{email, password}=req.body;
    try{
        const event=await Event.findById(req.params.id);
        if(event && event.organizer.toString()===req.user.id){
            event.isDeleted=true;
            await event.save()
            res.status(200).json({message:'Event deleted'});
        }
        else{
            res.status(404).json({error:'Event not found'});
        }
    }
    catch(error){
        res.status(500).json({error:"Server error"})
    }
}