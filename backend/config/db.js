import mongoose from 'mongoose'
const connectDB = async () => {
    console.log(process.env.MONGO_URL);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`Connected to Mongodb Database ${conn.connection.host}`);

    }
    catch (error) {
        console.log(`error in mongodb ${error}`
        )
    }
}
export default connectDB;
