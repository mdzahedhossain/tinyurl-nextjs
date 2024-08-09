import { NextResponse } from "next/server";
import { registerUser } from "@/app/lib/db";

export async function POST(request) {
    const contentType = await request.headers.get("content-type");

    if (contentType !== "application/json") {
        return NextResponse.json({"error" : "Invalid Request"}, {status: 415});
    }

    const data = await request.json();
    const { username, password, passwordConfirm, email } = data;

    if (password !== passwordConfirm) {
        return NextResponse.json({"message" : `Passwords much match. Please try again...`}, {status: 400});
    }

    const isValidData = username && password;
    if (!isValidData){
        return NextResponse.json({"message" : `Username and Password is required.`}, {status: 400});
    }

    const toSaveData = {
        username: data.username,
        password: data.password
    };

    if (email) {
        toSaveData['email'] = email;
    }

    const dbResponse = await registerUser(toSaveData);

    const responseData = dbResponse && dbResponse.data ? dbResponse.data : {};
    const responseStatus = dbResponse && dbResponse.status ? dbResponse.status : 500;
    return NextResponse.json(responseData, {status: responseStatus});
}