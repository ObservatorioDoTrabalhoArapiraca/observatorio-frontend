import { CardTitle } from "@/components/ui/card"
import Home from "@/pages/Home"

import Projeto from "@/pages/Project"
import RelatoriosPage from "@/pages/RelatoriosPage"
import DataTablePage from "@/pages/tabelas/DataTablePage"

import { ReactNode } from "react"

export type RoutePath = {
  path: string
  element: ReactNode
}

export const routePaths: RoutePath[] = [
  { path: "/", element: <Home /> },
  { path: "/project", element: <Projeto /> },
  { path: "/tabelas/:category", element: <DataTablePage /> },
  {
    path: "/graficos/:category",
    element: (
      <CardTitle className="w-full items-center p-4 flex justify-center text-lg">
        // Gráficos //{" "}
      </CardTitle>
    ),
  },
  {
    path: "/boletim/:category",
    element: <RelatoriosPage />,
  },
  {
    path: "/ajuda",
    element: <div>Ajuda</div>,
  },
]
