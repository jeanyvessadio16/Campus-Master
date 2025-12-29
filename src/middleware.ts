import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Define protected routes
    const isStudentRoute = path.startsWith('/student')
    const isTeacherRoute = path.startsWith('/teacher')
    const isAdminRoute = path.startsWith('/admin')
    const isProtected = isStudentRoute || isTeacherRoute || isAdminRoute

    // Get role from cookie (mock implementation)
    // In a real app, verify the JWT/Session token
    const role = request.cookies.get('role')?.value

    // If attempting to access a protected route without a role
    if (isProtected && !role) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isProtected && role) {
        // Role-based access control
        if (isStudentRoute && role !== 'student') {
            return NextResponse.redirect(new URL(`/${role}`, request.url))
        }
        if (isTeacherRoute && role !== 'teacher') {
            return NextResponse.redirect(new URL(`/${role}`, request.url))
        }
        if (isAdminRoute && role !== 'admin') {
            return NextResponse.redirect(new URL(`/${role}`, request.url))
        }
    }

    // Redirect authenticated users from login/register to their dashboard
    if ((path === '/login' || path === '/register') && role) {
        return NextResponse.redirect(new URL(`/${role}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder content
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
}
