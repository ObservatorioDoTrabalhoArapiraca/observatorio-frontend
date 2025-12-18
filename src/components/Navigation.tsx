import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"
import { FaAlignJustify } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const Navigation: React.FC = () => {
  const location = useLocation()
  const isActive = (path: string) => {
    return location.pathname === path
  }
  const naviLinks = [
    { name: "Inicio", path: "/" },
    { name: "O Projeto", path: "/project" },
    { name: "Dados e Estatísticas", path: "/data" },
    { name: "Legislação", path: "/legislacao" },
    { name: "Documentos", path: "/relatorio" },
  ]

  return (
    <nav className="main-nav bg-primary-blue p-3 px-8">
      <div className="sm:hidden flex text-off-white">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="bg-transparent hover:pointer shadow-none border-0 hover:border-0  hover:text-primary-blue hover:bg-off-white">
              <FaAlignJustify />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary-blue border-2 border-off-white text-off-white ">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {naviLinks.map((link) => (
              <DropdownMenuItem asChild key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="sm:block sm:flex-col w-full hidden text-off-white">
        <ul className="w-full flex justify-between items-center px-4 py-2">
          {naviLinks.map((link) => (
            <li
              key={link.name}
              className={`relative pb-1 ${
                isActive(link.path)
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-primary-yellow"
                  : ""
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
