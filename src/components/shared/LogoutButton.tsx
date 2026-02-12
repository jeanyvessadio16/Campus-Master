"use client";

import { LogOut } from "lucide-react";
import { useLogout } from "@/hooks/use-logout";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function LogoutButton() {
  const { logout, isLoading } = useLogout();

  return (
    <SidebarMenuButton
      onClick={logout}
      disabled={isLoading}
      tooltip="Se déconnecter"
      className="text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 cursor-pointer"
    >
      <LogOut />
      <span>{isLoading ? "Déconnexion..." : "Se déconnecter"}</span>
    </SidebarMenuButton>
  );
}
