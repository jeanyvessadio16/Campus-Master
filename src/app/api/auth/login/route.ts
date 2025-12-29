import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Logique d'authentification factice avec utilisateurs par défaut
        // Dans une application réelle, vous vérifieriez dans une base de données
        let role = "";

        // Utilisateurs par défaut
        const defaultUsers = {
            "admin@campus.com": "admin",
            "teacher@campus.com": "teacher",
            "student@campus.com": "student"
        };

        if (defaultUsers[email as keyof typeof defaultUsers]) {
            // Vérification simple du mot de passe pour les utilisateurs par défaut
            if (password === "password123") {
                role = defaultUsers[email as keyof typeof defaultUsers];
            } else {
                return NextResponse.json(
                    { message: "Mot de passe incorrect" },
                    { status: 401 }
                );
            }
        } else {
            // Fallback pour le prototype : attribution de rôle basée sur le mot-clé email
            // Utile pour tester l'inscription ou d'autres flux
            if (email.includes("admin")) {
                role = "admin";
            } else if (email.includes("teacher")) {
                role = "teacher";
            } else if (email.includes("student")) {
                role = "student";
            } else {
                role = "student"; // Par défaut
            }
        }

        // Définir le cookie
        // En production, utiliser "Secure; HttpOnly; SameSite=Strict"
        const response = NextResponse.json({
            message: "Connexion réussie",
            role: role,
            user: { name: "Utilisateur Test", email, role }
        });

        response.cookies.set("role", role, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 semaine
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred", error: error },
            { status: 500 }
        );
    }
}
