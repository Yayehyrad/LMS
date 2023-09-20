import { NextResponse } from "next/server";

export async function GET(req:any , res:NextResponse) {
    return NextResponse.json(
        {test : "as"}
    )
}