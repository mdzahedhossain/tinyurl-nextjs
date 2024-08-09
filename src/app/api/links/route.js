import { NextResponse } from "next/server";
import isValidURL from "@/app/lib/isValidUrl";
import { addLink, getMinLinksAndVisits } from "@/app/lib/db";

export async function GET(request) {
   const links = await getMinLinksAndVisits(100, 0); 
   return NextResponse.json(links, { status: 200});
}

export async function POST(request) {
    const contentType = await request.headers.get("content-type");

    if (contentType !== "application/json") {
        return NextResponse.json({"error" : "Invalid Request"}, {status: 415});
    }

    const data = await request.json();
    const url = data && data.url ? data.url : null;
    const validURL = await isValidURL(url, ["tinyurl-nextjs", "tinyurl-nextjs.", "tinyurl-nextjs.vercel.app"]);
    if (!validURL){
        return NextResponse.json({"message" : `${url} is not valid.`}, {status: 400});
    }

    const dbResponse = await addLink(url);
    //const { responseData, responseStatus } = dbResponse;
    const responseData = dbResponse && dbResponse.data ? dbResponse.data : {};
    const responseStatus = dbResponse && dbResponse.status ? dbResponse.status : 500;
    return NextResponse.json(responseData, {status: responseStatus});
}