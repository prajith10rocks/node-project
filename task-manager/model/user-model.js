import mongoose from "mongoose";

const signupScheme = mongoose.Schema({
    USERNAME:{
        type:String,
        required:true
    },
    EMAIL:{
        type:String,
        required:true
    },
    PASSWORD:{
        type:String,
        required:true
    }
});
const signupModel = mongoose.model('signupDetails',signupScheme);
module.exports = signupModel;