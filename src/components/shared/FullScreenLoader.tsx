"use client";

import { cn } from "@/lib/utils";

interface FullScreenLoaderProps {
  isLoading: boolean;
  message?: string;
  className?: string;
}

export function FullScreenLoader({
  isLoading,
  message = "Chargement en cours...",
  className,
}: FullScreenLoaderProps) {
  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        className,
      )}
    >
      <div className="bg-background rounded-lg shadow-lg p-8 text-center animate-in fade-in zoom-in duration-300">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-secondary border-t-primary"></div>
        </div>

        {/* Message */}
        <p className="text-foreground font-medium">{message}</p>
      </div>
    </div>
  );
}
