const express=require("express")
const {FlightModel}=require("../models/flight.model")

const flightRouter=express.Router()


//get the all flights

flightRouter.get("/",async(req,res)=>{
    try {
        let flight=await FlightModel.find();
        res.status(200).send(flight)
    } catch (error) {
        res.send({"error":error.message})
    }
})

//get by id

flightRouter.get("/:id",async(req,res)=>{
    try {
        let flight=await FlightModel.findById(req.params.id);
        res.status(200).send(flight)
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})

//flight data added
flightRouter.post("/",async(req,res)=>{
    let data=req.body
    try {
        let flight=new FlightModel(data)
        await flight.save()

        res.status(201).send({"msg":"Flight data added"})
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})


//flight data edit

flightRouter.patch("/:id",async(req,res)=>{
    let id=req.params.id
    let data=req.body
    try {
        await FlightModel.findByIdAndUpdate(id,data)
    
        res.status(204).send("Flight data updated")
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})


//delete flight data

flightRouter.delete("/:id",async(req,res)=>{
    let id=req.params.id
    
    try {
        await FlightModel.findByIdAndDelete(id)
    
        res.status(202).send(`Flight data deleted ${FlightModel.length}`)
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})
module.exports={flightRouter}