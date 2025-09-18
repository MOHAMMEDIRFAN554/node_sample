import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        cardNumber: {
            type: String,
            required: true,
            unique: true
        },
        accountNumberLast4: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        pin: {
            type: String,
            required: true
        },
        balance:{
            type:String,
            
            
        }


    }
)

const Atm = mongoose.model("Atm", userSchema)
export default Atm