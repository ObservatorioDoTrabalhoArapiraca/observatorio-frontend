import Help from "@/pages/ajuda/Ajuda"
import ChartsPageCaged from "@/pages/caged/graficos/ChartsPageCaged"

import DataTablePageCaged from "@/pages/caged/tabelas/DataTablePageCaged"

import Home from "@/pages/Home"

import Projeto from "@/pages/Project"
import ChartsPageRais from "@/pages/rais/graficos/ChartsPageRais"
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
        <ChartsPageCaged/>
    ),
  },
  { path: "/rais/tabelas/:category", element: <DataTablePageRais /> },
  {
    path: "/rais/graficos/:category",
    element: (
        <ChartsPageRais/>
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
