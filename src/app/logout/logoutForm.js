'use client';

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
            <form onSubmit={handleForm}>
                <div>Are you sure you want to Logout?</div>
                <button type="submit">Yes, Continue</button>
                <Link href='/'>Cancel</Link>
            </form>
        </>
     );
}
 
export default LogoutForm;