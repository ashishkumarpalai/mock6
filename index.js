const express=require("express")
require("dotenv").config()
const {connection}=require("./configs/db")
const{userRouter}=require("./routes/user.routes")
const{flightRouter}=require("./routes/flight.routes")
const{bookingRouter}=require("./routes/booking.routes")
const {authenticate}=require("./middleware/auth.middleware")

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("wellcome")
    console.log("Wellcome air ticket booking app")
})

//user registrationand login
app.use("/api",userRouter)

// app.use(authenticate)
//flight data
app.use("/api/flights",authenticate,flightRouter)

//booking data
app.use("/api",authenticate,bookingRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB is connected")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is running ${process.env.port}`)
})