import signDetailsModel from '../models/SignPage.js';

export const AddUser = async (req , res) => {
    const fullname = req.body.fullname.toString();
    const username = req.body.username.toString();
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const confirmPassword = req.body.confirmPassword.toString();
    
    
    const newSign = new signDetailsModel({
        fullname:fullname,
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
        
    });

    try {
        console.log('Saved Successfully!');
        await newSign.save();
        res.json(newSign);
    } catch (error) {
        console.log(error);
    }
}

export const GetUsers = async (req , res) => {
    try {
        const allBookings = await signDetailsModel.find();
        res.json(allBookings);
    } catch (error) {
        console.log("No Record Found...")
    }
}

export const DeleteUser = async(req,res) => {
        try {
            const deleteBookings = await signDetailsModel.findByIdAndDelete(req.params.id);
            res.json(deleteBookings);
            console.log(`Successfully Deleted : ${req.params.id}`);
        } catch (error) {
            console.log("Error!!!");
        }           
}

export const UpdateUser = async(req,res) => {
    try {
        const updateBookings = await signDetailsModel.findByIdAndUpdate(req.params.id, req.body);
        res.json(updateBookings);
        console.log("Updated");
    } catch (error) {
        console.log("Error!!!");
    }           
}

