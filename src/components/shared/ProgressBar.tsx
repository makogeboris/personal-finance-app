"use client";

import * as React from "react";

import { ProgressBudget, ProgressPot } from "@/components/ui/progress";

export function ProgressBarBudget() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <ProgressBudget value={progress} className="w-full" />;
}

export function ProgressBarPot() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <ProgressPot value={progress} className="w-full" />;
}
