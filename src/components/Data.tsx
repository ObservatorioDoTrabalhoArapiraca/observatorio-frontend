// src/pages/Indicadores.tsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Legend, PieChart, Pie, Tooltip, Cell, ResponsiveContainer
} from 'recharts';
import './Data.css';

const idadeColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#d84d4d'];

const idadeData = [
    { name: '0-14 anos', value: 25 },
    { name: '15-24 anos', value: 18 },
    { name: '25-54 anos', value: 40 },
    { name: '55-64 anos', value: 10 },
    { name: '65+ anos', value: 7 }
  ];

const data2 = [
  { name: '2012', value: 2200000 },
  { name: '2013', value: 2300000 },
  { name: '2014', value: 2350000 },
  { name: '2015', value: 2250000 },
  { name: '2016', value: 2280000 },
  { name: '2017', value: 2290000 },
  { name: '2018', value: 2230000 },
  { name: '2019', value: 2240000 },
  { name: '2020', value: 2300000 },
  { name: '2022', value: 2500000 },
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
        outerRadius={140}  // Aumentamos aqui
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
          <h3>Nº de empregos formais<br />2012 a 2022</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data2}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8e8e8e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grafico">
          <h3>Vínculos por setor<br />Arapiraca, 2022</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data3}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#c084fc" />
            </BarChart>
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
