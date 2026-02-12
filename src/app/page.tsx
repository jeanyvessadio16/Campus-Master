import { Button } from "@/components/ui/button";
import { whyCampusMaster } from "./data/whyCampusMaster";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import HeaderNavbar from "@/components/shared/HeaderNavbar";
import Footer from "@/components/shared/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HeaderNavbar />
      <main>
        {/* Hero section */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center flex flex-col space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit mx-auto">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Plateforme pédagogique moderne
              </span>
            </div>

            {/* Titre principal */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Campus Master
                <span className="block text-primary mt-2">
                  Plateforme pédagogique
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                La solution complète pour la gestion, diffusion et suivi des
                contenus pédagogiques. Connectez étudiants, enseignants et
                administrateurs en un seul écosystème.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/login">
                  Accéder à mon espace
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">En savoir plus</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-muted-foreground mt-12 pt-8 border-t">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Intuitif</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Campus Master */}
        <section id="about" className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              Pourquoi Campus Master ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyCampusMaster.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icons className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
