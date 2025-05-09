// app/api/blog/route.ts

import { NextResponse } from 'next/server'
import { db } from '@/lib/db' // assuming you exported Prisma client as `db`

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(blogs)
  } catch (error) {
    console.error('[GET BLOGS]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
