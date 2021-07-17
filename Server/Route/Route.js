const express=require('express');
const router=express.Router();
const BankController=require('../Controller/BankController')
router.post("/all",BankController.postdata);
router.get("/alldata/:dob/:salary/:clibil/:loan",BankController.getall);
router.get("/getpersonalloan/:dob/:salary/:clibil/:loan",BankController.getpersonalloan);
router.get("/buisnessloan/:dob/:salary/:clibil/:loan",BankController.buisnessloan);
router.get("/laploan/:dob/:salary/:clibil/:loan",BankController.laploan);
module.exports=router;