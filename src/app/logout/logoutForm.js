'use client';

import { Button } from "flowbite-react";
import Link from "next/link";

const LogoutForm = ({didSubmit}) => {

    const handleForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data);

        const endpoint = "/api/auth/logout";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        };

        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            window.location.href = "/login";
        }
    }
    return ( 
        <>
            <form onSubmit={handleForm} className="flex max-w-md flex-col gap-4">
                <div>Are you sure you want to Logout?</div>
                <Button type="submit" className="mb-2">Yes, Continue</Button>
                <Button href='/' color="gray">Cancel</Button>
            </form>
        </>
     );
}
 
export default LogoutForm;