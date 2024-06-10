import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/model/contactModel";
import { create } from "domain";
export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        await connectDB();
        await Contact.create({
            name,
            email,
            message
        })
        return NextResponse.json({ message: "Message has been sent", success: true });

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(` * ${error.errors[e].message}`);
            }
            // console.log(`This is error list ${errorList}`);
            return NextResponse.json({message:errorList});
        } else {
            NextResponse.json({message:error});
            // console.log(`This is normal message ${error}`);
        }
    }
}