import React from "react";
import { IndividualData } from "./IndividualData";
export const Data = ({ excelData }) => {
    console.log("the excel data is", excelData);


    return excelData.map((individualExcelData) => (
        <tr key={individualExcelData.formno}>
            <IndividualData individualExcelData={individualExcelData} />
        </tr>

    )

    )

}