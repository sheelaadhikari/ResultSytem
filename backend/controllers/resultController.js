
import resultModel from "../models/resultModel.js";
import fs from "fs";
export const testController = async (req, res) => {
    try {
        return res.status(200).send({
            message: "view api",
        });
    } catch (error) {
        console.log(error);
    }
};
// upload controller



export const uploadController = async (req, res) => {
    try {
        const result = req.files;
        if (result && result.size > 10000000) {
            return res
                .status(400)
                .send({ error: "Photo is required and should be less than 1 mb" });
        }


        const uploads = new resultModel({ ...req.files });
        if (result) {
            uploads.result.data = fs.readFileSync(result.path);
            uploads.result.contentType = result.type;
        }
        await uploads.save();
        res.status(201).send({
            success: true,
            message: "uploaded file successfully",
            uploads,
        });


    } catch (error) {
        console.log(error);
    }
};





//view controller
export const viewController = async (req, res) => {

    try {
        const view = await resultModel.findById(req.params._id).select("result");
        if (view.result.data) {
            res.set("Content-type", view.result.contentType);
            return res.status(200).send(view.result.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "no result found",
            error,
        });
    }
};

