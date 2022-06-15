import mongoose from 'mongoose';

const visitorDetailsStructure = mongoose.Schema({
    userName: String,
    email: String,
    destinationName: String,
    img: String,
    price: String,
    duration: String
});


const visitorDetailsModel = mongoose.model('visitorDetailsModel',visitorDetailsStructure);

export default visitorDetailsModel;