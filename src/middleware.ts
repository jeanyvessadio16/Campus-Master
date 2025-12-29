import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Définir les routes protégées
    const isStudentRoute = path.startsWith('/student')
    const isTeacherRoute = path.startsWith('/teacher')
    const isAdminRoute = path.startsWith('/admin')
    const isProtected = isStudentRoute || isTeacherRoute || isAdminRoute

    // Récupérer le rôle depuis le cookie (implémentation factice)
    // Dans une application réelle, vérifiez le jeton JWT/Session
    const role = request.cookies.get('role')?.value

    // Si tentative d'accès à une route protégée sans rôle
    if (isProtected && !role) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isProtected && role) {
        // Contrôle d'accès basé sur les rôles
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

    // Rediriger les utilisateurs authentifiés depuis login/register vers leur tableau de bord
    if ((path === '/login' || path === '/register') && role) {
        return NextResponse.redirect(new URL(`/${role}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Faire correspondre tous les chemins de requête sauf ceux commençant par :
         * - api (routes API)
         * - _next/static (fichiers statiques)
         * - _next/image (fichiers d'optimisation d'image)
         * - favicon.ico (fichier favicon)
         * - contenu du dossier public
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
}
