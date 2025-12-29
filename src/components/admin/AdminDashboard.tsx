import { Users, BookOpen, Activity, AlertCircle } from "lucide-react";
import { AdminStatCard } from "./AdminStats";

export function AdminDashboard() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AdminStatCard
                    title="Total Users"
                    value={1450}
                    icon={Users}
                    description="+180 this month"
                />
                <AdminStatCard
                    title="Total Courses"
                    value={56}
                    icon={BookOpen}
                    description="12 added recently"
                />
                <AdminStatCard
                    title="System Health"
                    value="98%"
                    icon={Activity}
                    description="All systems operational"
                />
                <AdminStatCard
                    title="Pending Issues"
                    value={3}
                    icon={AlertCircle}
                    description="Requires attention"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Registrations</h3>
                    <ul className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <li key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">U{i}</div>
                                    <div>
                                        <p className="text-sm font-medium">New User {i}</p>
                                        <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                                    </div>
                                </div>
                                <span className="text-xs text-muted-foreground">Joined today</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">System Logistics</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span>Server Load</span>
                            <span className="font-medium">24%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[24%]" />
                        </div>

                        <div className="flex items-center justify-between text-sm mt-4">
                            <span>Storage Used</span>
                            <span className="font-medium">65%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-yellow-500 h-full w-[65%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
