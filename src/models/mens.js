const mongoose=require('mongoose');

const menSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        typr:String,
        default:"100m"
    }
})

const MensRanking = new mongoose.model()