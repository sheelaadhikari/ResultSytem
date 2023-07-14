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
        await resultModel.insertMany(req.body);

        console.log("data for server ", req.body);






        // switch (true) {
        //     case !formno:
        //         return res.status(400).send({ error: "form number  is Required" });

        //     case !shift:
        //         return res.status(400).send({ error: "Shift is Required" });
        //     case !name:
        //         return res.status(400).send({ error: "name is Required" });
        //     case !schoolsee:
        //         return res.status(400).send({ error: "School name  is Required" });
        //     case !entrancemarks:
        //         return res.status(400).send({ error: "entrance marks is Required" });

        // }

        return res.status(200).send({
            message: "upload api",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: " data is not uploaded",
            success: false,
            error: error,
        });
    }
};

//view controller
export const viewController = async (req, res) => {
    try {
        const view = await resultModel.findOne({ formno: req.params._formno });
        const pass = view.entrancemarks >= 50;
        console.log(" the resulkasdfjlakdfjdlfja", view)


        return res.status(200).send({
            success: true,
            message: "here is your result",
            view: view,
            pass: pass,
        });



    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "no result found",
            error,
        });
    }
};
