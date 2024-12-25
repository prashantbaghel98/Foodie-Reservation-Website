import mongoose from "mongoose";

export const dbConnection = async()=>{
    await mongoose.connect('mongodb+srv://prashantbaghel98:gz10QIHzuHjqXm4W@cluster0.eldlz.mongodb.net/Reservation').then(()=>{
        console.log("DB Connected")
    })
}