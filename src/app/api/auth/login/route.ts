import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Logique d'authentification factice
        // Dans une application réelle, vous vérifieriez dans une base de données
        let role = "student"; // Rôle par défaut

        if (email.includes("admin")) {
            role = "admin";
        } else if (email.includes("teacher")) {
            role = "teacher";
        } else if (email.includes("student")) {
            role = "student";
        } else {
            // Pour les besoins de test/simulation, attribuer un rôle basé sur le contenu de l'email ou par défaut étudiant
            // Si les identifiants sont invalides, renvoyer une erreur.
            // Pour cette démo : invalide si le mot de passe est court (juste comme exemple) ou vide
            if (!password || password.length < 1) {
                return NextResponse.json(
                    { message: "Identifiants invalides" },
                    { status: 401 }
                );
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
