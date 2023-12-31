import React, { useState } from "react";
import Topic from "../components/Topic";
import { BASEURL } from "../constant";
import axios from "axios";

const ResultPage = () => {
    const [formno, setFormno] = useState("");
    const [viewResult, setViewResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(`${BASEURL}/api/v1/result/view/${formno}`);

            console.log("Your result is", res.data);
            setViewResult(res.data);
        } catch (error) {
            console.log("error occured", error);
        }
    };

    return (
        <>
            <div className="form">
                <h5 className="h5">
                    <Topic />
                </h5>
                <div className="col-md-9">
                    <div className="mb-3">
                        <input
                            type="text"
                            value={formno}
                            placeholder="write a your form number"
                            className="form-control"
                            onChange={(e) => {
                                setFormno(e.target.value);
                            }}
                        />
                        <div className="mb-3">
                            <button
                                className="btn btn-primary check-result"
                                onClick={handleSubmit}
                            >
                                {" "}
                                Check Result
                            </button>
                        </div>
                    </div>

                    {viewResult !== null ? (
                        <div className="md-9">




                            <br></br>
                            <br></br>

                            <div className="title">     {viewResult.view.message}</div>

                            <br>
                            </br>
                            <br></br>

                        </div>
                    ) : (
                        <div></div>
                    )}




                </div>
            </div>
        </>
    );
};

export default ResultPage;
