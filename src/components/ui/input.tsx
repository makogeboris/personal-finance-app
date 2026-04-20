import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/70 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/90 border-accent text-foreground bg-background file:bg-background h-8 w-full min-w-0 rounded-md border px-4 py-5.5 text-base font-medium transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:text-sm file:font-medium placeholder:font-light focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
