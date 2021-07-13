const Subscribe=require('../Modal/Modal');
exports.postdata=async(req,res)=>{
    try
    {    
    const {Name,Person,cibil,age,salaried}=req.body;   
    const data=await Subscribe.create({Name,Person,cibil,age,salaried}); 
    res.status(200).json({data:data});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    } 
}
exports.getall=async(req,res)=>{
    let b;
    const dob=req.params.dob;
    const  clibil=req.params.salary;
    const  salary=req.params.clibil;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    if(salary==="salary")
    {
        b=true;
    }
    else
    {
        b=false;
    }
    console.log(age+" "+b);
    let clibilvalue=parseInt(clibil);
    let newage=parseInt(age);
    if(age<18)
    {
        return res.status(400).json("Invalid Credential");
    }
    try{ 
         const data=await Subscribe.find({ cibil: { $lte: clibilvalue },salaried:b,age:{$gte:newage}});
         console.log(data); 
         res.status(200).json({data:data});
      }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    }
}