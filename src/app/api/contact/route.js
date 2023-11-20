import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try {
        const body = await req.json();
        await dbConnect();

        await Contact.create(body);

        return NextResponse.json({
            message:'Success!!!'
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:'Success!!!'
        },{
            status:500
        })
    }
}