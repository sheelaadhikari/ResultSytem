import mongoose from "mongoose";
const resultSchema = new mongoose.Schema({
    formno: {
        type: Number,
        required: true,
        unique: true

    },
    shift: {
        type: String,
        required: true

    },
    name: {
        type: String,
        required: true

    },
    schoolsee: {
        type: String,
        required: true

    },
    entrancemarks: {
        type: Number,
        required: true

    },



}, { timestamps: true });
export default mongoose.model('result', resultSchema);