import { CardTitle } from "@/components/ui/card"
import Charts from "@/pages/graficos/Charts"
import ChartsPage from "@/pages/graficos/ChartsPage"
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
        <ChartsPage/>
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
