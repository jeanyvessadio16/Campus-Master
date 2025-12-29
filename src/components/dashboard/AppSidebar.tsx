"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { StudentSidebar } from "./StudentSidebar"
import { TeacherSidebar } from "./TeacherSidebar"
import { AdminSidebar } from "./AdminSidebar"
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    if (pathname.startsWith("/teacher")) {
        return <TeacherSidebar {...props} />
    }

    if (pathname.startsWith("/admin")) {
        return <AdminSidebar {...props} />
    }

    // Default to student sidebar (e.g. for /student or generic dashboard paths)
    // You can also add more specific checks or a generic fallback if needed.
    return <StudentSidebar {...props} />
}
