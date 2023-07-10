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
        return res.status(200).send({
            message: "upload api",
        });
    } catch (error) {
        console.log(error);
    }
};

//view controller
export const viewController = async (req, res) => {
    try {
        return res.status(200).send({
            message: "view api",
        });
    } catch (error) {
        console.log(error);
    }
};
