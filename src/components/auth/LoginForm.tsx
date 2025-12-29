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
// If you don't have a Form component wrapper from shadcn, we'll manually handle errors or use simple conditionals.
// Assuming shadcn structure might exist but user didn't show it, falling back to standard react-hook-form usage with direct error display or leveraging shadcn Form if available.
// Prompt didn't checking for "Form" component but "Input" exists. I will use standard html structure with error messages below inputs to be safe and consistent with previous code structure, but enhanced.

import { loginSchema, LoginSchema } from "@/lib/validations/auth";

export default function LoginForm() {
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
    // Navigate or API call here
    console.log("Login Data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="min-w-96">
        <CardHeader className="text-2xl text-center font-bold">
          <CardTitle className="font-bold italic">Connexion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
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
            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Connexion..." : "Se connecter"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant={"link"} className="mx-auto inline-block">
            <Link href="/signup">
              Vous n&apos;avez pas de compte? S&apos;inscrire
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
