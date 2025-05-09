// app/api/todo/create/route.ts

import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // detsrtucture todoTitle from the incoming request
    console.log('ee');
    
    const {title,content} = await req.json(); 
    if (!content) {
      return new NextResponse("Title required", { status: 400 });
    }
    // Create and save todo on the database
    const blog = await db.blog.create({
      data: {
        title: title,
        content: content,
      },
    });

    return NextResponse.json(blog, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("[POST TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
