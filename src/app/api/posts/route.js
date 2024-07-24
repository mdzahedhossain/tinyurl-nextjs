import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({items: [
        {id: 1, title: "Hello World!"},
        {id: 2, title: "Hello Country!"},
        {id: 3, title: "Hello City!"},
    ]});
}

// export async function POST() {
    //return NextResponse.json({hello: "World"});
// }