import next from 'next'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { number } from 'zod'

let count: number = 0

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log("aaa", count)
    count += 1
    const res = NextResponse.next()
    res.cookies.set("counter",count.toString())
    return res
    // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
}