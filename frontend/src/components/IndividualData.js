import React from 'react'



export const IndividualData = ({ individualExcelData }) => {
    return (
        <>
            <td>{individualExcelData.formno}</td>
            <td>{individualExcelData.shift}</td>

            <td>{individualExcelData.name}</td>

            <td>{individualExcelData.schoolsee}</td>
            <td>{individualExcelData.entrancemarks}</td>




        </>
    )
}