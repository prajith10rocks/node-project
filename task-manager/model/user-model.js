import mongoose from 'mongoose';
const signupSheme = mongoose.model({
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
const signupModel = mongoose.model('signupDetails',signupSheme);
module.exports = signupModel;