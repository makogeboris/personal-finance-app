"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

type ProgressPotProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  color?: string;
};

function ProgressBudget({
  className,
  value,
  color,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { color?: string }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-secondary rounded-4 relative flex h-8 w-full items-center overflow-x-hidden",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 transition-all"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: color ?? "var(--color-green)",
        }}
      />
    </ProgressPrimitive.Root>
  );
}

function ProgressPot({ className, value, color, ...props }: ProgressPotProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-secondary rounded-4 relative flex h-2 w-full items-center overflow-x-hidden",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 transition-all"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: color,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { ProgressBudget, ProgressPot };
