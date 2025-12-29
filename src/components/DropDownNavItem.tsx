import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { NaviLink } from "@/types"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function DropdownNavItem({ link }: { link: NaviLink }) {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent shadow-none hover:bg-tertiary-green p-4 rounded-lg"
        >
          {link.name}
          <ChevronDown className={cn("ml-2 h-4 w-4", open ? "rotate-180" : "")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {link.children?.map((sublink) => (
          <DropdownMenuItem asChild key={sublink.name}>
            <Link
              to={sublink.path}
              className="bg-transparent shadow-none hover:bg-secondary-green p-4 rounded-lg"
            >
              {sublink.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
