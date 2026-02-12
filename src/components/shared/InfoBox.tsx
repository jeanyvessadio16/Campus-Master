"use client";

import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  title: string;
  message: string;
  type?: "info" | "warning" | "success" | "error";
  className?: string;
}

export function InfoBox({
  title,
  message,
  type = "info",
  className,
}: InfoBoxProps) {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    success:
      "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    error:
      "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
  };

  return (
    <div
      className={cn(
        "border rounded-lg p-4 flex gap-3",
        styles[type],
        className,
      )}
      role="alert"
    >
      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm opacity-90">{message}</p>
      </div>
    </div>
  );
}
