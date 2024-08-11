'use client';

import { useState } from "react";
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";



const LinksCreateForm = ({didSubmit}) => {

    const [results, setResults] = useState(null);
    const [message, setMessage] = useState(null);

    const handleForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data);

        const endpoint = "/api/links";

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
        if (result.message) {
            setMessage(result.message);
        }
    }
    return ( 
        <>
            { message && <Alert color="warning">{message}</Alert>}
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleForm}>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="url" value="Enter a URL to shorten" />
                    </div>
                    <TextInput id="url" type="text" name="url" placeholder="Your url to shorten" required />
                </div>
                <Button type="submit">Shorten</Button>
            </form>
        </>
     );
}
 
export default LinksCreateForm;