import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(_request: NextRequest) {
  const response = NextResponse.json({
    message: "Déconnexion réussie",
    success: true,
  });

  // Supprimer tous les cookies d'authentification
  response.cookies.delete("role");
  response.cookies.delete("token");
  response.cookies.delete("session");

  return response;
}
