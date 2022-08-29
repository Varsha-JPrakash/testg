const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://varshaprakash:varshaprakash@cluster0.8imosyu.mongodb.net/?retryWrites=true&w=majority",e)

const contactModel=mongoose.model("usercollection",{
    fname:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,   
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    }
})
module.exports=contactModel