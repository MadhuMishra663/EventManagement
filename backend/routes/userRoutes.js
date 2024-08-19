const express =require ('express');
const {getAllUsers,getUserById,disableUser}=require('../controllers/userController');
const {protect,admin}=require('../middleware/authMiddleware');
const router = express.Router();


router.get('/',protect,admin,getAllUsers);
router.get('/',protect,admin,getUserById);
router.patch('/:id/disable',protect,admin,disableUser);

module.exports=router;