const mongoose =require('mongoose');
const connection=mongoose.connect('mongodb+srv://Saneha9988:2JrsYkANQcbWf6BV@cluster0.lp0seqg.mongodb.net/saneha?retryWrites=true&w=majority&appName=Cluster0');
module.exports={
    connection
}