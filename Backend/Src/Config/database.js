import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
    ('${process.env.MONGODB_URI}') 
      console.log('\n mongodb Connected,
     ${connectionInstance.connection.host}');

    } catch (error) {
        console.error('Error occurred while connecting to the database:', error);
    }
}
    