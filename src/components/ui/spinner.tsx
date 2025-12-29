import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({
  className,
  text,
  ...props
}: React.ComponentProps<"svg"> & { text?: string }) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center ">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
      <p>{text}</p>
    </div>
  )
}

export { Spinner }
