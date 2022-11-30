const mongoose = require('mongoose')

const DB = "CONNECTION URL";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully connected to the Database")
}).catch((error)=>{
    console.log(error.nessage);
})

