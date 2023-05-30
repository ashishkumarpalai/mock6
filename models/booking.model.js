const mongoose = require("mongoose")
const {UserModel}=require("../models/user.model")
const {FlightModel}=require("../models/flight.model")
const bookingSchema = new mongoose.Schema(
    {
        user:{type:mongoose.Schema.ObjectId,ref:UserModel},
        flight: {type:mongoose.Schema.ObjectId,ref:FlightModel}
    }
)

const BookingModel = mongoose.model("booking", bookingSchema)

module.exports = { BookingModel }