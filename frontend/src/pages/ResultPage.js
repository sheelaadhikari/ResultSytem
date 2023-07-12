import React, { useState } from 'react'
import Topic from '../components/Topic'
import { BASEURL } from '../constant';
import axios from 'axios';

const ResultPage = () => {

    const [formno, setFormno] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const res = await axios.get(`${BASEURL}/api/v1/result/view/${formno}`);

            setFormno(res.view);

            console.log("Your result is", res)

        }
        catch (error) {
            console.log("error occured", error);
        }
    }




    return (
        <>


            <div>
                <Topic />

                <div className='col-md-9'>
                    <div className='mb-3'>
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
                            <button className="btn btn-primary" onClick={handleSubmit}> Check Result</button>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ResultPage