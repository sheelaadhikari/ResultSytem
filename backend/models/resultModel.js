import mongoose from "mongoose";
const resultSchema = new mongoose.Schema({
    result: {
        data: Buffer,
        contentType: String,
    }

}, { timestamps: true });
export default mongoose.model('result', resultSchema);