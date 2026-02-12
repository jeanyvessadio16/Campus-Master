import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Icône ou illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary opacity-20 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Page non trouvée
          </h2>
          <p className="text-muted-foreground mb-6">
            Désolé, la page que vous cherchez n&rsquo;existe pas ou a été
            supprimée.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <Link href="/">Retour à l&rsquo;accueil</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Se connecter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
