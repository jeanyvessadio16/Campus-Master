"use client";

import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSuccessProps {
  message?: string;
  className?: string;
}

export function FormSuccess({ message, className }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm text-green-800 dark:text-green-200 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md p-2",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <CheckCircle className="w-4 h-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
}
