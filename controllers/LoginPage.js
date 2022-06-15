import visitorDetailsModel from '../models/LoginPage.js';

export const AddUser = async (req , res) => {
    const userName = req.body.userName.toString();
    const email = req.body.email.toString();
    const destinationName = req.body.destinationName.toString();
    const img = req.body.img.toString();
    const price = req.body.price.toString();
    const duration = req.body.duration.toString();
    
    
    const newVisitor = new visitorDetailsModel({
        userName: userName,
        email: email,
        destinationName: destinationName,
        img: img,
        price: price, 
        duration: duration
    });

    try {
        console.log('Saved Successfully!');
        await newVisitor.save();
        res.json(newVisitor);
    } catch (error) {
        console.log(error);
    }
}

export const GetUsers = async (req , res) => {
    try {
        const allBookings = await visitorDetailsModel.find();
        res.json(allBookings);
    } catch (error) {
        console.log("No Record Found...")
    }
}

export const DeleteUser = async(req,res) => {
        try {
            const deleteBookings = await visitorDetailsModel.findByIdAndDelete(req.params.id);
            res.json(deleteBookings);
            console.log(`Successfully Deleted : ${req.params.id}`);
        } catch (error) {
            console.log("Error!!!");
        }           
}

export const UpdateUser = async(req,res) => {
    try {
        const updateBookings = await visitorDetailsModel.findByIdAndUpdate(req.params.id, req.body);
        res.json(updateBookings);
        console.log("Updated");
    } catch (error) {
        console.log("Error!!!");
    }           
}

