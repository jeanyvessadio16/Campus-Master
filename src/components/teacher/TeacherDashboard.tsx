import { BookOpen, Users, Star, FileText, PlusCircle, Megaphone, CheckSquare, Search } from "lucide-react";
import { TeacherStatCard } from "./TeacherStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TeacherDashboard() {
    return (
        <div className="space-y-6">
            {/* Search and Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Rechercher un cours, un étudiant..." className="pl-8" />
                </div>
                <div className="flex w-full sm:w-auto items-center gap-2">
                    <Button className="flex-1 sm:flex-none hover:bg-primary/90">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Ajouter un cours
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none">
                        <Megaphone className="mr-2 h-4 w-4" />
                        Annonce
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none">
                        <CheckSquare className="mr-2 h-4 w-4" />
                        Noter
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <TeacherStatCard
                    title="Courses Taught"
                    value={3}
                    icon={BookOpen}
                    description="Active courses"
                />
                <TeacherStatCard
                    title="Total Students"
                    value={124}
                    icon={Users}
                    description="+12 this month"
                />
                <TeacherStatCard
                    title="Average Rating"
                    value="4.8"
                    icon={Star}
                    description="Based on 56 reviews"
                />
                <TeacherStatCard
                    title="Assignments to Grade"
                    value={15}
                    icon={FileText}
                    description="Needs attention"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Course Performance</h3>
                    <div className="h-[200px] flex items-center justify-center text-muted-foreground bg-muted/20 rounded-md">
                        Chart Placeholder
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Submissions</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between border-b pb-2">
                            <div>
                                <p className="text-sm font-medium">Math Homework 3</p>
                                <p className="text-xs text-muted-foreground">Alice Johnson</p>
                            </div>
                            <span className="text-xs text-muted-foreground">2h ago</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-2">
                            <div>
                                <p className="text-sm font-medium">History Essay</p>
                                <p className="text-xs text-muted-foreground">Bob Smith</p>
                            </div>
                            <span className="text-xs text-muted-foreground">5h ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
