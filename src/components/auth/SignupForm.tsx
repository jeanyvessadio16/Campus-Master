"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { signupSchema, SignupSchema } from "@/lib/validations/auth";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupSchema) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Signup failed");
        return;
      }

      const result = await response.json();
      console.log("Signup success:", result);

      // Force reload or redirect
      window.location.href = "/";

    } catch (error) {
      console.error("An error occurred during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="min-w-96">
        <CardHeader className="text-2xl text-center font-bold">
          <CardTitle className="font-bold italic">Inscription</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  type="text"
                  id="prenom"
                  placeholder="Entrez votre prénom"
                  {...register("prenom")}
                />
                {errors.prenom && (
                  <p className="text-sm text-red-500">{errors.prenom.message}</p>
                )}
              </div>
              <div className="space-y-2 flex-1">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  type="text"
                  id="nom"
                  placeholder="Entrez votre nom"
                  {...register("nom")}
                />
                {errors.nom && (
                  <p className="text-sm text-red-500">{errors.nom.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Exemple: nom@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                type="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirmez votre mot de passe"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "S'inscrire..." : "S'inscrire"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant={"link"} className="mx-auto inline-block">
            <Link href="/login">Vous avez déjà un compte? Se connecter</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
