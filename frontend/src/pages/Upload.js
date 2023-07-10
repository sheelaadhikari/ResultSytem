import React from 'react'
import Topic from '../components/Topic.js';


const Upload = () => {
    const handleFlile = (e) => {
        console.log(e.target.file());
    }
    return (
        <>
            <Topic />
            <h4>upload the file</h4>
            <input type='file' onChange={(e) => handleFlile(e)} />

        </>
    )
}

export default Upload;