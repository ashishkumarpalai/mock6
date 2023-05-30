const express=require("express")

const {BookingModel}=require("../models/booking.model")

const bookingRouter=express.Router()

bookingRouter.post("/booking",async(req,res)=>{
    let bookdata={
        user:req.body.userID,
        flight:req.body.flight
    }

    try {
        let booking=new BookingModel(bookdata)
        await booking.save()
        res.status(201).send({"msg":"Successfully Flight booked"})
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})

bookingRouter.get("/dashboard",async(req,res)=>{
    try {
        let data=await BookingModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})
module.exports={bookingRouter}