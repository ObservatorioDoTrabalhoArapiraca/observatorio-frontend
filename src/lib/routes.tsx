import Help from "@/pages/ajuda/Ajuda"
import ChartsPage from "@/pages/caged/graficos/ChartsPage"
import DataTablePageCaged from "@/pages/caged/tabelas/DataTablePageCaged"

import Home from "@/pages/Home"

import Projeto from "@/pages/Project"
import DataTablePageRais from "@/pages/rais/tabelas/DataTablePageRais"
import RelatoriosPage from "@/pages/RelatoriosPage"


import { ReactNode } from "react"

export type RoutePath = {
  path: string
  element: ReactNode
}

export const routePaths: RoutePath[] = [
  { path: "/", element: <Home /> },
  { path: "/project", element: <Projeto /> },
  { path: "/caged/tabelas/:category", element: <DataTablePageCaged /> },
  {
    path: "/caged/graficos/:category",
    element: (
        <ChartsPage/>
    ),
  },
  { path: "/rais/tabelas/:category", element: <DataTablePageRais /> },
  {
    path: "/rais/graficos/:category",
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
    element: <Help />,
  },
]
