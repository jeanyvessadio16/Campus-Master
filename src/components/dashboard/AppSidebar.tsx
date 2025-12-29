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

    // Par défaut, barre latérale étudiant (par ex. pour /student ou des chemins génériques)
    // Vous pouvez également ajouter des vérifications plus spécifiques ou une solution de repli générique si nécessaire.
    return <StudentSidebar {...props} />
}
