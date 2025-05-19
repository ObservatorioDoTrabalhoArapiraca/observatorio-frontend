import React, { useState } from 'react';
import TabelaSalarioPorEscolaridade from '../components/SalarioTable';
import TabelaMedianaSalario from '../components/TabelaMedianaSalario';
import TabelaAnoTotalMovimentacoes from '../components/TabelaAnoTotalMovimentacoes';
import Data from '../components/Data';
import './DataPage.css';

const DataPage = () => {
  const [tab, setTab] = useState<'tabela' | 'graficos'>('tabela');
  const [tabela, setTabela] = useState<'escolaridade' | 'mediana' | 'movimentacoes'>('escolaridade');

  return (
    <main className="Data">
      <div className="tab-selector">
        <button
          className={tab === 'tabela' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('tabela')}
        >
          Tabelas
        </button>
        <button
          className={tab === 'graficos' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('graficos')}
        >
          Gráficos
        </button>
      </div>
      {tab === 'tabela' && (
        <>
          <div className="tab-selector" style={{ marginBottom: '2rem' }}>
            <button
              className={tabela === 'escolaridade' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('escolaridade')}
            >
              Salário por Escolaridade
            </button>
            <button
              className={tabela === 'mediana' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('mediana')}
            >
              Mediana Salarial por Sexo
            </button>
            <button
              className={tabela === 'movimentacoes' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('movimentacoes')}
            >
              Total de Movimentações por Ano
            </button>
          </div>
          {tabela === 'escolaridade' && <TabelaSalarioPorEscolaridade />}
          {tabela === 'mediana' && <TabelaMedianaSalario />}
          {tabela === 'movimentacoes' && <TabelaAnoTotalMovimentacoes />}
        </>
      )}
      {tab === 'graficos' && <Data />}
    </main>
  );
};

export default DataPage;