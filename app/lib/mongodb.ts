import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODBURL as string);
            console.log("MongoDB connected");
        }else{
            console.log("MongoDB is already connected");
        }
    } catch (error) {
        
    }
}

export default connectDB;