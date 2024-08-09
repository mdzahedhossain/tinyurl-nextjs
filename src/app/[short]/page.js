import { notFound, redirect } from "next/navigation";
import { getShortLinkRecord } from "@/app/lib/db";
import getDomain from "../lib/getDomain";


async function triggerVisit(linkId) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({linkId: linkId})
    }

    const domain = getDomain();
    const endpoint = `${domain}/api/visits`;

    return await fetch(endpoint, options);
}

const ShortPage = async ({ params }) => {
    console.log(params);
    const { short } = params;

    if (!short) {
        notFound();
    }

    const [record] = await getShortLinkRecord(short);

    if (!record) {
        notFound();
    }
    
    const { url, id } = record;

    if (!url) {
        notFound();
    }

    if(id) {
        await triggerVisit(id);
    }

    return <h1>{url}</h1>;
    //redirect(url, "push"); // comment this out for now
}
 
export default ShortPage;