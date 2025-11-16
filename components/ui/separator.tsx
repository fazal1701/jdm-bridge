"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, "orientation" | "decorative"> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  className?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props }: SeparatorProps,
    ref: React.ForwardedRef<React.ElementRef<typeof SeparatorPrimitive.Root>>
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

