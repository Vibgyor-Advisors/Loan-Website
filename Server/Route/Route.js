const express=require('express');
const router=express.Router();
const BankController=require('../Controller/BankController')
router.post("/all",BankController.postdata);
router.get("/alldata/:dob/:salary/:clibil",BankController.getall);
module.exports=router;