import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Legend, PieChart, Pie, Tooltip, Cell, ResponsiveContainer
} from 'recharts';
import './Data.css';
import { getAnoTotalMovimentacoes, AnoTotalMovimentacoes, getSalarioPorProfissao, SalarioPorProfissao } from '../core/services/salarioService';

const idadeColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#d84d4d'];

const idadeData = [
    { name: '0-14 anos', value: 25 },
    { name: '15-24 anos', value: 18 },
    { name: '25-54 anos', value: 40 },
    { name: '55-64 anos', value: 10 },
    { name: '65+ anos', value: 7 }
  ];

const data3 = [
  { name: 'Indústria', value: 400000 },
  { name: 'Construção', value: 200000 },
  { name: 'Comércio', value: 600000 },
  { name: 'Serviços', value: 1500000 },
  { name: 'Agro', value: 300000 },
];

const data4 = [
  { name: '2019', negras: 20, naoNegras: 15, homensNegros: 12, homensNaoNegros: 10 },
  { name: '2020', negras: 26, naoNegras: 18, homensNegros: 14, homensNaoNegros: 12 },
  { name: '2021', negras: 22, naoNegras: 17, homensNegros: 13, homensNaoNegros: 11 },
  { name: '2022', negras: 21, naoNegras: 16, homensNegros: 12, homensNaoNegros: 10 },
  { name: '2023', negras: 20, naoNegras: 15, homensNegros: 11, homensNaoNegros: 9 },
];

const Indicadores: React.FC = () => {
  const [movAno, setMovAno] = useState<AnoTotalMovimentacoes[]>([]);
  const [loadingMov, setLoadingMov] = useState(true);
  const [topProfissoes, setTopProfissoes] = useState<SalarioPorProfissao[]>([]);
  const [loadingProf, setLoadingProf] = useState(true);

  useEffect(() => {
    getAnoTotalMovimentacoes()
      .then(data => {
        setMovAno(data.filter(item => String(item.ano) !== '2025'));
      })
      .finally(() => setLoadingMov(false));

    getSalarioPorProfissao()
      .then(data => {
        // Ordena por total decrescente e pega as 5 maiores
        const comTotal = data.filter(p => typeof p.total === 'number');
        if (comTotal.length > 0) {
          const top5 = [...comTotal].sort((a, b) => (b.total ?? 0) - (a.total ?? 0)).slice(0, 5);
          setTopProfissoes(top5);
        } else {
          setTopProfissoes([]);
        }
      })
      .finally(() => setLoadingProf(false));
  }, []);

  return (
    <div className="indicadores-container">
        <h1>Indicadores</h1>

    <div className="grid-container">
    <div className="grafico">
  <h3 style={{ fontSize: '1.5rem' }}>Distribuição da População por Faixa Etária</h3>
  <ResponsiveContainer width="100%" height={450}>
    <PieChart>
      <Pie
        data={idadeData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="45%"
        outerRadius={140}  
        label={({ value }) => value}
      >
        {idadeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={idadeColors[index % idadeColors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        verticalAlign="bottom"
        align="left"
        layout="vertical"
        iconSize={18}  
        wrapperStyle={{
          paddingLeft: '1px',
          paddingBottom: '20px',
          fontSize: '1.5rem' 
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

        <div className="grafico">
          <h3>Nº de empregos formais<br />por ano</h3>
          <ResponsiveContainer width="100%" height={400}>
            {loadingMov ? (
              <p>Carregando...</p>
            ) : (
              <BarChart data={movAno.map(item => ({ name: item.ano, value: item.total }))}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8e8e8e" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="grafico">
          <h3>Top 5 Profissões com Mais Casos</h3>
          <ResponsiveContainer width="100%" height={400}>
            {loadingProf ? (
              <p>Carregando...</p>
            ) : topProfissoes.length === 0 ? (
              <p>Dados de total de casos não disponíveis.</p>
            ) : (
              <BarChart data={topProfissoes.map(p => ({ name: p.profissao, value: p.total }))} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={180} />
                <Tooltip />
                <Bar dataKey="value" fill="#c084fc" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="grafico">
          <h3>Desocupação por sexo e raça<br />2019 a 2023</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data4}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="negras" name="Mulheres Negras" fill="#f3c7c7" />
              <Bar dataKey="naoNegras" name="Mulheres Não Negras" fill="#d3b9b9" />
              <Bar dataKey="homensNegros" name="Homens Negros" fill="#8884d8" />
              <Bar dataKey="homensNaoNegros" name="Homens Não Negros" fill="#555" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Indicadores;
