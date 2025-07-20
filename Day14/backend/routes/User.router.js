const express=require('express');
const { userSignUp, userLogin} = require('../controller/userController');
const {products} =require('../products/userProducts');
const  {verifyToken}=require('../middleware/auth.middleware');
const  router=express.Router();
router.post('/signup',userSignUp);
router.post('/login',userLogin);
router.get('/products',verifyToken,products);
module.exports=router;
