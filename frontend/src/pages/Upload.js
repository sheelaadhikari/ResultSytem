import React, { useState } from "react";
import Topic from "../components/Topic.js";
import { Data } from "../components/Data.js";
import axios from 'axios';
import * as XLSX from "xlsx";
import { BASEURL } from './../constant';
import '../App.css';
const Upload = () => {
    //on change state
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    console.log(excelFile);




    // submit data
    const [excelData, setExcelData] = useState(null);
    //handle file
    const fileType = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];


    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                console.log(" the file should be of this type", selectedFile.type);


                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                };
            } else {
                console.log("please select only excel file type");
                setExcelFile(null);
            }
        } else {
            console.log("please select the file");
        }
    };

    // submit the data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            if (excelFile !== null) {
                const workbook = XLSX.read(excelFile, { type: "buffer" });
                const workSheetName = workbook.SheetNames[0];
                const workSheet = workbook.Sheets[workSheetName];
                const data = XLSX.utils.sheet_to_json(workSheet);

                const res = await axios.post(`${BASEURL}/api/v1/result/upload`, data);

                console.log("data given by server to client", res.data);

                if (res.data.success) {
                    console.log("uploaded the data successfully");
                }
                else {
                    console.log("data is not uploaded")

                }
                setExcelData(data);
            }
            else {

                setExcelData(null);
            }
        }
        catch (error) {
            console.log(error);
        }

    };
    console.log("excel data", excelData);




    return (
        <div className="container">
            <div className="form">
                <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
                    <label>
                        <h5 className="h5">
                            {" "}
                            <Topic />{" "}
                        </h5>
                    </label>

                    <input
                        type="file"
                        className="form-control choose-file"
                        onChange={handleFile}
                        required
                    />

                    {excelFileError && <div>{excelFileError}</div>}
                    <button
                        type="submit"
                        className="btn btn-success button-submit"
                        style={{ marginTop: 5 + "px" }}
                    >
                        Submit
                    </button>
                </form>
            </div>


            <div className="view-excel">
                <h3> View The Excel Data</h3>
                <div className="viewer">
                    {excelData === null && <>no file selected</>}
                    {excelData !== null && (
                        <div className=" d-felx">
                            <table className=" table" style={{ alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                                <thead>
                                    <tr >
                                        <th scope="column">FormNo</th>
                                        <th scope="column">Shift</th>
                                        <th scope="column">Name</th>
                                        <th scope="column">SchoolSEE</th>
                                        <th scope="column">EntranceMarks</th>
                                        <th scope="column">Message</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <Data excelData={excelData} />
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Upload;
