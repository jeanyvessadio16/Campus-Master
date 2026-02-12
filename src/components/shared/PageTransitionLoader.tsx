"use client";

import { useEffect, useState } from "react";

export function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleEnd = () => setIsLoading(false);

    // Router events don't exist in App Router, so we track navigation differently
    // This is a fallback visual indicator
    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleEnd);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleEnd);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-primary to-transparent animate-pulse">
      <div className="h-full w-full bg-primary/50 animate-pulse"></div>
    </div>
  );
}
