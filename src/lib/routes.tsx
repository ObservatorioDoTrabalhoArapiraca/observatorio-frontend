import Help from "@/pages/ajuda/Ajuda"
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
  { path: "/caged/tabelas/:category", element: <DataTablePage /> },
  {
    path: "/caged/graficos/:category",
    element: (
        <ChartsPage/>
    ),
  },
  { path: "/rais/tabelas/:category", element: <DataTablePage /> },
  {
    path: "/rais/graficos/:category",
    element: (
        <ChartsPage/>
    ),
  },
  { path: "/rais-caged/tabelas/:category", element: <DataTablePage /> },
  {
    path: "/rais-caged/graficos/:category",
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
