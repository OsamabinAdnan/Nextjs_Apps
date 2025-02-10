import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request ){
    const data = await req.json();
    
    const {name, email, comment, blogId} = data;

    if(!name || !email || !comment || !blogId){
        return NextResponse.json({
            message: 'All fields are required',   
        },{
            status: 400
        });
    }
    try {
        const newComment = await client.create({
            _type: 'comments',
            name,
            email,
            comment,
            blog: {
                _type: 'reference',
                _ref: blogId
            }
        })
        return NextResponse.json(
            {message:"Comment added successfully", comment:newComment},
            {status:201}
        );
    }catch(error){
        return NextResponse.json(
            {message: 'Failed to add a comment', error},
            {status:500}
        );
    }
}