<!-- TODO: preencher com os corretos para documentar -->
Endpoints Arapiraca
// 1. Lista todos os períodos
GET /api/arapiraca/
// Resposta:
{
  "total": 25,
  "periodos": [
    {
      "id": 1,
      "periodo": "série 2002 A 2019",
      "ano_referencia": 2002,
      "ano_2002": 402,
      "ano_2003": 516,
      // ... até ano_2019
    }
  ]
}

// 2. Série temporal
GET /api/arapiraca/serie/

// 3. Dados de um ano específico
GET /api/arapiraca/2019/

// 4. Comparação entre anos
GET /api/arapiraca/comparacao/

💰 Endpoints Salários/Movimentação

// 1. Mediana salarial por sexo
GET /api/mediana-salario/
// Resposta:
[
  {"sexo": "Homem", "mediana": 1853.06},
  {"sexo": "Mulher", "mediana": 2110.62}
]

// 2. Total de movimentações por ano
GET /api/ano-total-movimentacoes/

// 3. Salário por escolaridade
GET /api/salario-por-escolaridade/

// 4. Salário por faixa etária
GET /api/salario-por-faixa-etaria/

// 5. Salário por profissão
GET /api/salario-por-profissao/

# caged

// 1. Lista estabelecimentos
GET /api/cagedest/

// 2. Detalhes de um estabelecimento
GET /api/cagedest/{id}/

// 3. Estatísticas por município
GET /api/cagedest/stats/municipio/

// 4. Estatísticas por setor
GET /api/cagedest/stats/setor/

// 5. Top empregadores
GET /api/cagedest/top-empregadores/

# pdfs

// Lista todos os PDFs disponíveis
GET /api/pdfs/
// Resposta:
[
  {
    "name": "BOLETIM CONJUNTURAL - MAIO - 2025.pdf",
    "url": "http://observatorio-backend-production.up.railway.app/media/pdfs/BOLETIM%20CONJUNTURAL%20-%20MAIO%20-%202025.pdf"
  }
]

# utilitários

// Limpar cache (requer POST)
POST /api/limpar-cache/
// Resposta:
{"status": "Cache limpo com sucesso!"}
