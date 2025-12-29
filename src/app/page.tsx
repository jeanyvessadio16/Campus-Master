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

export default function Home() {
  return (
    <>
      {/* Header */}
      <HeaderNavbar />
      <main>
        {/* Hero ection */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
          <div className="px-10 text-center flex flex-col space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Campus Master, plateforme pédagogique des étudiants de Master
            </h1>
            <p className="text-xl font-semibold">
              Gestion, diffusion et suivi des contenus pédagogiques des campus
              et des étudiants
            </p>
            <Button size={"xl"} className="max-w-sm mx-auto">
              <Link href="/login">Se connecter</Link>
            </Button>
          </div>
        </section>
        {/* About Campus Master */}
        <section id="about">
          <div className="p-10">
            <h2 className="text-3xl text-slate-800 md:text-4xl font-bold text-center mb-10">
              A propos de Campus Master
            </h2>
            <div className="grid md:grid-cols-3 gap-5 my-10 place-content-between place-items-center">
              {whyCampusMaster.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <item.icons className={`w-8 h-8 ${item.color}`} />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-2xl font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
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
