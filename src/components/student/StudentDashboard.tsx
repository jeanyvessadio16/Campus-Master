import { BookOpen, GraduationCap, Clock, Award } from "lucide-react";
import { StatCard } from "./StatCard";
import { RecentActivity } from "./RecentActivity";

export function StudentDashboard() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Courses Enrolled"
                    value={4}
                    icon={BookOpen}
                    description="Active courses"
                    trend="+1"
                    trendUp={true}
                />
                <StatCard
                    title="Average Grade"
                    value="14.5"
                    icon={GraduationCap}
                    description="Last semester: 13.2"
                    trend="+1.3"
                    trendUp={true}
                />
                <StatCard
                    title="Hours Spent"
                    value="12.5h"
                    icon={Clock}
                    description="This week"
                />
                <StatCard
                    title="Completed"
                    value={2}
                    icon={Award}
                    description="Total courses completed"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    {/* Placeholder for a chart or main content area if needed later */}
                    <div className="rounded-xl border bg-card text-card-foreground shadow h-[300px] flex items-center justify-center text-muted-foreground">
                        Course Progress Chart Placeholder
                    </div>
                </div>
                <div className="col-span-3">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
