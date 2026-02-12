import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/shared/Badge";
import { Alert } from "@/components/shared/Alert";
import { Button } from "@/components/ui/button";

export default function ColorPalettePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Palette de Couleurs Campus Master
          </h1>
          <p className="text-muted-foreground">
            Respectant les couleurs officielles de l'université Cheikh Hamidou
            Kane
          </p>
        </div>

        {/* Couleurs Principales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Couleurs Principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bleu */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Bleu Université</CardTitle>
                <CardDescription>Couleur Primaire</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-lg bg-primary" />
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>HSL:</strong> 210 92% 45%
                    </p>
                    <p>
                      <strong>Hex:</strong> #0B7FFF
                    </p>
                    <p>
                      <strong>RGB:</strong> 11, 127, 255
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="default">Primaire</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vert */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">
                  Vert Université
                </CardTitle>
                <CardDescription>Couleur Secondaire</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-lg bg-secondary" />
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>HSL:</strong> 142 76% 36%
                    </p>
                    <p>
                      <strong>Hex:</strong> #1B9B4D
                    </p>
                    <p>
                      <strong>RGB:</strong> 27, 155, 77
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="success">Succès</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orange */}
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">
                  Orange Université
                </CardTitle>
                <CardDescription>Couleur d'Accent</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-lg bg-yellow-500" />
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>HSL:</strong> 36 92% 50%
                    </p>
                    <p>
                      <strong>Hex:</strong> #FFA500
                    </p>
                    <p>
                      <strong>RGB:</strong> 255, 165, 0
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="warning">Avertissement</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Boutons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Buttons avec Couleurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bouton Primaire</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button>Action Primaire</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bouton Secondaire</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button variant="secondary">Action Secondaire</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bouton Outline</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button variant="outline">Voir Plus</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Alerts par Type</h2>
          <div className="space-y-4">
            <Alert
              type="success"
              title="Succès"
              description="L'action a été complétée avec succès"
            />
            <Alert
              type="warning"
              title="Avertissement"
              description="Veuillez vérifier les informations entrées"
            />
            <Alert
              type="error"
              title="Erreur"
              description="Une erreur s'est produite lors du traitement"
            />
            <Alert
              type="info"
              title="Information"
              description="Ceci est un message informatif"
            />
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Badges Statuts</h2>
          <div className="flex gap-4 flex-wrap">
            <Badge variant="default">Primaire</Badge>
            <Badge variant="secondary">Secondaire</Badge>
            <Badge variant="success">Succès</Badge>
            <Badge variant="warning">Avertissement</Badge>
            <Badge variant="error">Erreur</Badge>
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dégradés Possibles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Bleu → Vert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 rounded-lg bg-gradient-to-r from-primary to-secondary" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Bleu → Orange</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 rounded-lg bg-gradient-to-r from-primary to-yellow-500" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Vert → Orange</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 rounded-lg bg-gradient-to-r from-secondary to-yellow-500" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>Informations de Conception</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>✅ Contraste WCAG AA pour accessibilité</li>
              <li>✅ Palette respectant l'identité de l'université</li>
              <li>✅ Compatible dark mode automatiquement</li>
              <li>✅ Variables CSS pour personnalisation future</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
