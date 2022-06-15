import mongoose from "mongoose";

const signDetailsStructure = mongoose.Schema({
    fullname:String,
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
    token:String,
});


const signDetailsModel = mongoose.model('signDetailsModel',signDetailsStructure);

export default signDetailsModel;