"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Icône ou illustration */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-destructive opacity-20 mb-4">
            ⚠️
          </h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Une erreur s&apos;est produite
          </h2>
          <p className="text-muted-foreground mb-6">
            Une erreur inattendue s&apos;est produite. Veuillez réessayer ou
            contacter le support.
          </p>

          {/* Error message (development only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm font-mono text-destructive/80 break-words">
                {error.message || "Erreur inconnue"}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={reset}>Réessayer</Button>
          <Button variant="outline" asChild>
            <a href="/">Retour à l&apos;accueil</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
