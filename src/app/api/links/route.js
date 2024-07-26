import { NextResponse } from "next/server";
import isValidURL from "@/lib/isValidUrl";

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

    return NextResponse.json(data, {status: 201});
}