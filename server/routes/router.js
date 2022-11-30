const express = require('express')
const router = express.Router();

const users = require('../models/userSchema');



//register user 
router.post('/register',async(req,res)=>{
    console.log(req);
    console.log(req.body);

    const {name,regNo,gender,yoa,fatherName,category,dob,doa,field,course} = req.body;

    console.log(name,regNo,gender,yoa,fatherName,category,dob,doa,field,course);

    if(!name || !regNo || !fatherName || !gender || !category || !dob || !doa || !yoa || !course || !field){
        res.status(422).json("Please fill all the fucking required fields !");
    }

    try{
        const preuser = await users.findOne({regNo:regNo});
        console.log(preuser);

        if(preuser)
        {
            res.status(422).json("Student already Exits...!");
        }
        else
        {
            const addUser = new users({
                name,regNo,gender,yoa,fatherName,category,dob,doa,field,course
            });

            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    }catch(err){
        res.status(404).json(err);
    }
    
})


// get data api (getting all the data from mongodb)
router.get("/getdata", async(req, res) => {
    
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }catch(err){
        res.status(422).json(err);
    }

})

// for individual user
router.get("/getuser/:id",async(req,res)=>{
    console.log('Hello');
    try{
        console.log(req.params);
        const {id} = req.params;

        const userIndividual = await users.findById({_id:id});
        console.log(userIndividual);
        res.status(201).json(userIndividual);

    }catch(error)
    {
        res.status(422).json(error);
    }
})

// update user data 

router.patch("/updateuser/:id", async(req,res)=>{

    try{
        const {id} = req.params;

        const updatedUser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updatedUser);
        res.status(201).json(updatedUser);

    }catch(error){
        res.status(404).json(error);
    }
})

// delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const deleteduser = await users.findByIdAndDelete({_id:id});
        console.log(deleteduser);
        res.status(201).json(deleteduser);
    }catch(error){
        res.status(422).json(error);
    }
})



module.exports = router;