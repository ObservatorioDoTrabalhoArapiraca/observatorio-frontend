// source .venv/bin/activate && uvicorn api.index:app --reload

import { AnoAPIMovimentacoes, getAPIMovimentacao } from "@/core/services/fastAPIService"
import { useEffect, useState } from "react"
export default function Help() {
  const [dados, setDados] = useState<AnoAPIMovimentacoes[]>([])
  useEffect(() => {
    async function fetchData() {
      const response = await getAPIMovimentacao()
      setDados(response)
      return response
    }
    fetchData()
  }, [])

console.log(dados);

  
  return (
    <div className="flex gap-4 flex-col">
      {
        dados ? dados.map((dado) => {
          return (
            <div className="bg-gray-400 p-4 gap-4 flex py-5" key={dado.id}>

            <div >{dado.id}</div>
            <div  >{dado.salario}</div>
            <div  >{dado.competencia_movimentacao}</div>
            <div  >{dado.sexo_id}</div>
            <div  >{dado.sexo_descricao}</div>
            <div  >{dado.raca_cor_id}</div>
            <div  >{dado.raca_cor_descricao}</div>
            <div  >{dado.secao}</div>
            </div>
          )
        }) : <div>Carregando...</div>
      }
    </div>
  )
}
