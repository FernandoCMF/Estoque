import mongoose from "mongoose";
require('dotenv').config();
const connectToDB = async () => {
    await mongoose.connect(process.env.DB_URI).then((res)=>{
        console.log('MONGODB CONNECTION SUCCESSFULLY')
    })
}

export default connectToDB;