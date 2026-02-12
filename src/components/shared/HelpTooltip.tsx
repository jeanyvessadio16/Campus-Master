"use client";

import { HelpCircle, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface HelpTooltipProps {
  text: string;
  children?: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export function HelpTooltip({
  text,
  children,
  side = "right",
}: HelpTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        aria-label="Aide"
        aria-expanded={isOpen}
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 p-3 text-sm bg-popover border border-border rounded-lg shadow-md max-w-xs",
            side === "right" && "left-full ml-2 top-1/2 -translate-y-1/2",
            side === "left" && "right-full mr-2 top-1/2 -translate-y-1/2",
            side === "top" && "bottom-full mb-2 left-1/2 -translate-x-1/2",
            side === "bottom" && "top-full mt-2 left-1/2 -translate-x-1/2",
          )}
          role="tooltip"
        >
          <p className="text-foreground">{text}</p>
          {children}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 p-1 hover:bg-secondary rounded-full"
            aria-label="Fermer l'aide"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
