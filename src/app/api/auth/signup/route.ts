import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, prenom, nom } = body;

        // Mock registration logic
        // Determine role based on email keyword or default to student
        let role = "student";
        if (email.includes("admin")) {
            role = "admin";
        } else if (email.includes("teacher")) {
            role = "teacher";
        }

        // Set cookie to auto-login after signup
        const response = NextResponse.json({
            message: "Signup successful",
            user: { name: `${prenom} ${nom}`, email, role }
        });

        response.cookies.set("role", role, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred", error: error },
            { status: 500 }
        );
    }
}
