import {
  BookOpen,
  GraduationCap,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";
import { StatCard } from "./StatCard";
import { RecentActivity } from "./RecentActivity";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div>
        <SectionHeader
          title="Vue d'ensemble"
          description="Suivi de votre progression académique"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Cours inscrits"
            value={4}
            icon={BookOpen}
            description="Cours actifs"
            trend="+1"
            trendUp={true}
          />
          <StatCard
            title="Moyenne générale"
            value="14.5"
            icon={GraduationCap}
            description="Semestre dernier : 13.2"
            trend="+1.3"
            trendUp={true}
          />
          <StatCard
            title="Heures d'étude"
            value="12.5h"
            icon={Clock}
            description="Cette semaine"
          />
          <StatCard
            title="Tâches complétées"
            value={2}
            icon={Award}
            description="Total"
          />
        </div>
      </div>

      {/* Main Charts and Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Progression des cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm mb-2">Graphique de progression</p>
                  <p className="text-xs text-muted-foreground/70">
                    Intégration Chart.js/Recharts recommandée
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
