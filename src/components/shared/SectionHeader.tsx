"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 mb-6", className)}
    >
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-sm md:text-base mt-1">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
