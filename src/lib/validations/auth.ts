import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email invalide.",
    }),
    password: z.string().min(1, {
        message: "Le mot de passe est requis.",
    }),
});

export const signupSchema = z
    .object({
        prenom: z.string().min(2, {
            message: "Le prénom doit contenir au moins 2 caractères.",
        }),
        nom: z.string().min(2, {
            message: "Le nom doit contenir au moins 2 caractères.",
        }),
        email: z.string().email({
            message: "Email invalide.",
        }),
        password: z.string().min(6, {
            message: "Le mot de passe doit contenir au moins 6 caractères.",
        }),
        confirmPassword: z.string().min(6, {
            message: "La confirmation du mot de passe est requise.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas.",
        path: ["confirmPassword"],
    });

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
