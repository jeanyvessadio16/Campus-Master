import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock } from "lucide-react";

interface Activity {
    id: string;
    title: string;
    course: string;
    type: "assignment" | "grade" | "course_start" | "comment";
    timestamp: string;
}

const mockActivities: Activity[] = [
    {
        id: "1",
        title: "Introduction au Droit completed",
        course: "Droit Civil",
        type: "course_start",
        timestamp: "2 hours ago",
    },
    {
        id: "2",
        title: "Devoir de mathématiques submitted",
        course: "Mathématiques",
        type: "assignment",
        timestamp: "5 hours ago",
    },
    {
        id: "3",
        title: "New grade: 18/20",
        course: "Histoire",
        type: "grade",
        timestamp: "1 day ago",
    },
];

export function RecentActivity() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {mockActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center">
                            <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                                {activity.type === "grade" ? (
                                    <CheckCircle className="h-4 w-4" />
                                ) : activity.type === "assignment" ? (
                                    <Clock className="h-4 w-4" />
                                ) : (
                                    <BookOpen className="h-4 w-4" />
                                )}
                            </div>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{activity.title}</p>
                                <p className="text-sm text-muted-foreground">
                                    {activity.course} • {activity.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
