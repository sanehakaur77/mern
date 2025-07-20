const express=require('express');
const {connection}=require('./configs/db');
const app=express();
app.use(express.json());
const port=5000;
const userRouter=require('./routes/User.router')
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/api',userRouter);

app.listen(port,async()=>{
   
    try{
 console.log('Database is connecting.....');
        await connection;
        console.log('Database is connected');
            console.log(`server is running at http://localhost:${port}`);
    }
    catch(error){
        console.log(error)
    }

})
