import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      default: "size-4",
      sm: "size-3",
      lg: "size-6",
      icon: "size-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export function Spinner({ size }: SpinnerProps) {
  return <Loader2 className={cn(spinnerVariants({ size }))} />;
}