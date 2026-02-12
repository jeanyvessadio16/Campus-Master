import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, prenom, nom } = body;

    // Logique d'inscription factice
    // Déterminer le rôle basé sur le mot-clé dans l'email ou par défaut étudiant
    let role = "student";
    if (email.includes("admin")) {
      role = "admin";
    } else if (email.includes("teacher")) {
      role = "teacher";
    }

    // Définir le cookie pour une connexion automatique après l'inscription
    const response = NextResponse.json({
      message: "Inscription réussie",
      user: { name: `${prenom} ${nom}`, email, role },
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
      { status: 500 },
    );
  }
}
