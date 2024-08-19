const express =require ('express');
const {createEvent, getAllEvents, deleteEvent}=require('../controllers/eventController');
const {protect,organizer,admin}=require('../middleware/authMiddleware');
const router = express.Router();

router.post('/',protect,organizer,createEvent);
router.get('/',protect,getAllEvents);
router.delete('/:id',protect,organizer,deleteEvent);

module.exports=router;