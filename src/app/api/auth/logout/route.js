import { NextResponse } from "next/server";
import { getUserByUsername } from "@/app/lib/db";
import { isMatchingPassword } from "@/app/lib/passwordUtils";

import { endSessionForUser } from "@/app/lib/sessions";

export async function POST(request) {
    
    await endSessionForUser();
    return NextResponse.json({}, {status: 200});
}