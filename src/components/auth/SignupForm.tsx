"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { Mail, Lock, User, Loader2 } from "lucide-react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormError } from "../shared/FormError";
import { FormSuccess } from "../shared/FormSuccess";
import { signupSchema, SignupSchema } from "@/lib/validations/auth";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function SignupForm() {
  const [generalError, setGeneralError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupSchema) => {
    setGeneralError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setGeneralError(error.message || "Erreur lors de l'inscription");
        return;
      }

      const result = await response.json();
      setSuccess(true);

      // Redirection sécurisée
      setTimeout(() => {
        window.location.href = `/${result.user.role}`;
      }, 1500);
    } catch (error) {
      setGeneralError(
        "Une erreur inattendue s'est produite. Veuillez réessayer.",
      );
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-b from-background to-secondary/5">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <User className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Créer un compte</CardTitle>
          <CardDescription>
            Rejoignez Campus Master en quelques minutes
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
            noValidate
          >
            {/* Erreur générale */}
            {generalError && <FormError message={generalError} />}
            {success && (
              <FormSuccess message="Inscription réussie ! Redirection en cours..." />
            )}

            {/* Nom et Prénom */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-sm font-medium">
                  Prénom <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="prenom"
                  placeholder="Entrez votre prénom"
                  className={cn(
                    "transition-colors",
                    errors.prenom &&
                      "border-destructive focus:ring-destructive",
                  )}
                  {...register("prenom")}
                  aria-invalid={!!errors.prenom}
                  aria-describedby={errors.prenom ? "prenom-error" : undefined}
                />
                {errors.prenom && (
                  <p id="prenom-error" className="text-xs text-destructive">
                    {errors.prenom.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-sm font-medium">
                  Nom <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="nom"
                  placeholder="Entrez votre nom"
                  className={cn(
                    "transition-colors",
                    errors.nom && "border-destructive focus:ring-destructive",
                  )}
                  {...register("nom")}
                  aria-invalid={!!errors.nom}
                  aria-describedby={errors.nom ? "nom-error" : undefined}
                />
                {errors.nom && (
                  <p id="nom-error" className="text-xs text-destructive">
                    {errors.nom.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Adresse email <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Entrez votre adresse email"
                  className={cn(
                    "pl-10 transition-colors",
                    errors.email && "border-destructive focus:ring-destructive",
                  )}
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mot de passe */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Mot de passe <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Créez un mot de passe"
                  className={cn(
                    "pl-10 transition-colors",
                    errors.password &&
                      "border-destructive focus:ring-destructive",
                  )}
                  {...register("password")}
                  aria-invalid={!!errors.password}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                />
              </div>
              {errors.password && (
                <p id="password-error" className="text-xs text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirmer mot de passe */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmer le mot de passe{" "}
                <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  className={cn(
                    "pl-10 transition-colors",
                    errors.confirmPassword &&
                      "border-destructive focus:ring-destructive",
                  )}
                  {...register("confirmPassword")}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby={
                    errors.confirmPassword ? "confirm-error" : undefined
                  }
                />
              </div>
              {errors.confirmPassword && (
                <p id="confirm-error" className="text-xs text-destructive">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Conditions d'utilisation */}
            <p className="text-xs text-muted-foreground text-center">
              En vous inscrivant, vous acceptez nos{" "}
              <Link href="#" className="text-primary hover:underline">
                conditions d&apos;utilisation
              </Link>
            </p>

            {/* Bouton Submit */}
            <Button
              type="submit"
              className="w-full mt-6 gap-2"
              disabled={isSubmitting || success}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Inscription...
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="border-t pt-4">
          <p className="text-sm text-muted-foreground text-center w-full">
            Vous avez déjà un compte ?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Se connecter
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
