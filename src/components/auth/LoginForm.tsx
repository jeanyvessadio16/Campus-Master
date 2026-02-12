"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";

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
import { loginSchema, LoginSchema } from "@/lib/validations/auth";

export default function LoginForm() {
  const [generalError, setGeneralError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setGeneralError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setGeneralError(error.message || "Erreur lors de la connexion");
        return;
      }

      const result = await response.json();
      setSuccess(true);

      // Redirection sécurisée
      setTimeout(() => {
        window.location.href = result.role ? `/${result.role}` : "/";
      }, 1000);
    } catch (error) {
      setGeneralError(
        "Une erreur inattendue s'est produite. Veuillez réessayer.",
      );
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-b from-background to-secondary/5">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-4">
            {/* <div className="bg-primary/10 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div> */}
          </div>
          <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
          <CardDescription>
            Accédez à votre espace Campus Master
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
              <FormSuccess message="Connexion réussie ! Redirection en cours..." />
            )}

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
                  placeholder="nom@exemple.com"
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
                <p
                  id="email-error"
                  className="text-xs text-destructive flex items-center gap-1"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mot de passe */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Mot de passe <span className="text-destructive">*</span>
                </Label>
                <Link
                  href="/forgotpassword"
                  className="text-xs text-primary hover:underline"
                >
                  Oublié ?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••"
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
                  Connexion...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 border-t pt-4">
          <p className="text-sm text-muted-foreground text-center">
            Vous n&rsquo;avez pas de compte ?{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              S&rsquo;inscrire
            </Link>
          </p>

          {/* Infos de connexion de démonstration */}
          <details className="text-xs text-muted-foreground border-t pt-3">
            <summary className="cursor-pointer hover:text-foreground">
              Identifiants de démonstration
            </summary>
            <div className="mt-2 space-y-1 bg-secondary/50 p-2 rounded">
              <p>✓ Email : admin@campus.com | Mot de passe : password123</p>
              <p>✓ Email : teacher@campus.com | Mot de passe : password123</p>
              <p>✓ Email : student@campus.com | Mot de passe : password123</p>
            </div>
          </details>
        </CardFooter>
      </Card>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
