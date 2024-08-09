'use client';

import { useState } from "react";

const RegisterForm = ({didSubmit}) => {

    const [results, setResults] = useState(null);

    const handleForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data);

        const endpoint = "/api/auth/register";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        };

        const response = await fetch(endpoint, options);
        const result = await response.json();
        setResults(result);

        if (didSubmit) {
            didSubmit(result);
        }
    }
    return ( 
        <>
            <form onSubmit={handleForm}>
                <input type="text" name="username" placeholder="Pick a username" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="password" name="password" placeholder="Your password" />
                <input type="password" name="passwordConfirm" placeholder="Confirm your password" />
                <button type="submit">Register</button>
            </form>
            { results && JSON.stringify(results) }
        </>
     );
}
 
export default RegisterForm;