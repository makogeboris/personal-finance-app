"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

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

interface ProgressPotProps extends React.ComponentProps<
  typeof ProgressPrimitive.Root
> {
  color?: string;
  value: number;
  secondaryValue?: number;
  variant?: "add" | "withdraw" | "default";
}

function ProgressPot({
  className,
  value,
  secondaryValue = 0,
  color,
  variant = "default",
  ...props
}: ProgressPotProps) {
  if (variant === "default") {
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

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-secondary rounded-4 relative h-2 w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      {variant === "add" && (
        <>
          <div
            className="bg-foreground absolute inset-y-0 left-0 transition-all duration-300"
            style={{ width: `${value}%` }}
          />
          <div
            className="bg-chart-1 absolute inset-y-0 rounded-r-full transition-all duration-300"
            style={{
              left: `${value}%`,
              width: `${secondaryValue}%`,
            }}
          />
          {secondaryValue > 0 && (
            <div
              className="bg-secondary absolute inset-y-0 z-10 w-0.5 transition-all duration-300"
              style={{ left: `${value}%` }}
            />
          )}
        </>
      )}

      {variant === "withdraw" && (
        <>
          <div
            className="bg-foreground absolute inset-y-0 left-0 transition-all duration-300"
            style={{ width: `${value}%` }}
          />
          <div
            className="bg-destructive absolute inset-y-0 rounded-r-full transition-all duration-300"
            style={{
              left: `${value}%`,
              width: `${secondaryValue}%`,
            }}
          />
          {secondaryValue > 0 && (
            <div
              className="bg-secondary absolute inset-y-0 z-10 w-0.5 transition-all duration-300"
              style={{ left: `${value}%` }}
            />
          )}
        </>
      )}
    </ProgressPrimitive.Root>
  );
}

export { ProgressBudget, ProgressPot };
