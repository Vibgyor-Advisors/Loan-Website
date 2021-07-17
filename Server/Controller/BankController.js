const Subscribe=require('../Modal/Modal');
exports.postdata=async(req,res)=>{
    try
    {    
    const {Name,Person,cibil,age,salaried,type,Phone,Payout}=req.body;   
    const data=await Subscribe.create({Name,Person,cibil,age,salaried,type,Phone,Payout}); 
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
    const loan=req.params.loan;
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
    console.log(age+" "+b+" "+loan);
    let clibilvalue=parseInt(clibil);
    let newage=parseInt(age);
    if(age<18)
    {
        return res.status(400).json("Invalid Credential");
    }
    try{ 
         const data=await Subscribe.find({type:loan,cibil: { $lte: clibilvalue },salaried:b,age:{$gte:newage}});
         console.log(data); 
         res.status(200).json({data:data});
      }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    }
}
exports.getpersonalloan=async(req,res)=>{
    let b;
    const dob=req.params.dob;
    const  clibil=req.params.salary;
    const  salary=req.params.clibil;
    const loan=req.params.loan;
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
    console.log(age+" "+b+" "+loan);
    let clibilvalue=parseInt(clibil);
    let newage=parseInt(age);
    if(age<18)
    {
        return res.status(400).json("Invalid Credential");
    }
    try{ 
         const data=await Subscribe.find({type:loan,cibil: { $lte: clibilvalue },salaried:b,age:{$gte:newage}});
         console.log(data); 
         res.status(200).json({data:data});
      }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    }
}
exports.buisnessloan=async(req,res)=>{
    let b;
    const dob=req.params.dob;
    const  clibil=req.params.salary;
    const  salary=req.params.clibil;
    const loan=req.params.loan;
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
    console.log(age+" "+b+" "+loan);
    let clibilvalue=parseInt(clibil);
    let newage=parseInt(age);
    if(age<18)
    {
        return res.status(400).json("Invalid Credential");
    }
    try{ 
         const data=await Subscribe.find({type:loan,cibil: { $lte: clibilvalue },salaried:b,age:{$gte:newage}});
         console.log(data); 
         res.status(200).json({data:data});
      }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    }
}
exports.laploan=async(req,res)=>{
    let b;
    const dob=req.params.dob;
    const  clibil=req.params.salary;
    const  salary=req.params.clibil;
    const loan=req.params.loan;
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
    console.log(age+" "+b+" "+loan);
    let clibilvalue=parseInt(clibil);
    let newage=parseInt(age);
    if(age<18)
    {
        return res.status(400).json("Invalid Credential");
    }
    try{ 
         const data=await Subscribe.find({type:loan,cibil: { $lte: clibilvalue },salaried:b,age:{$gte:newage}});
         console.log(data); 
         res.status(200).json({data:data});
      }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:"invalid"});  
    }
}