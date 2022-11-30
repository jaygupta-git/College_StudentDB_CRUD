const mongoose = require('mongoose')

const DB = "mongodb+srv://admin:admin123@cluster0.kg9sn.mongodb.net/StudentManagementSystem?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully connected to the Database")
}).catch((error)=>{
    console.log(error.nessage);
})

