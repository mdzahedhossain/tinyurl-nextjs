'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {

    useEffect(() => {

        console.log("error is: ", error);
    }, [error]);

    const retryRequestHandler = () => {
        reset();
    }

    return (
    <div>
        <h2>Something went wrong on purpose</h2>
        <button onclick={retryRequestHandler}>Retry Request</button>
    </div>
    );
}
 
export default Error;