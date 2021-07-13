const mongoose=require('mongoose');
const bankSchema=new mongoose.Schema({
   Name:{
        type:String
    },
    Person:{
        type:String
    },
    cibil:{
        type:Number
    },
    age:{
        type:Number
    },
    salaried:{
        type:Boolean
    },
    Payout:{
        type:String
    },
    Phone:{
        type:String
    }
});
const Subscribe=mongoose.model('Subscribe',bankSchema);
module.exports=Subscribe;