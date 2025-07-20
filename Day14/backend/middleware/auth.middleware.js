// middleware->
//  Jwt ->Json web token
const jwt=require('jsonwebtoken');
const verifyToken=(req,res,next)=>{
const authHeader=req.headers.authorization;
if(!authHeader){
    return res.status(401).send({message:'Unauthorized'});
}
const token=authHeader;
try{
    const decoded=jwt.verify(token,'saneha#123');
    req.user=decoded;
  
    next();
    
}
catch(err){
    return res.status(500).send({message:'Invalid token'});
}
}

module.exports={
    verifyToken
}

