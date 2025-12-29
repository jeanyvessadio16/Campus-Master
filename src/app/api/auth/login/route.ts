import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Mock authentication logic
        // In a real application, you would check against a database
        let role = "student"; // Default mock role

        if (email.includes("admin")) {
            role = "admin";
        } else if (email.includes("teacher")) {
            role = "teacher";
        } else if (email.includes("student")) {
            role = "student";
        } else {
            // For testing/mock purposes, assign role based on email content or default to student
            // If credentials are invalid, return error.
            // For this demo: invalid if password is short (just as an example) or empty
            if (!password || password.length < 1) {
                return NextResponse.json(
                    { message: "Invalid credentials" },
                    { status: 401 }
                );
            }
        }

        // Set cookie
        // In production, use "Secure; HttpOnly; SameSite=Strict"
        const response = NextResponse.json({
            message: "Login successful",
            role: role,
            user: { name: "Test User", email, role }
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
