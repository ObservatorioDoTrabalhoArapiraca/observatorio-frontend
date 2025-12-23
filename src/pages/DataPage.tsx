import { useState } from 'react';
import TabelaSalarioPorEscolaridade from '../components/SalarioTable';
import TabelaSalarioPorProfissao from '../components/TabelaSalarioPorProfissao';
import TabelaAnoTotalMovimentacoes from '../components/TabelaAnoTotalMovimentacoes';
import TabelaProfissoesPorDeficiencia from '../components/TabelaProfissoesPorDeficiencia';
import Data from '../components/Data';
// import './DataPage.css';

// TODO: excluir depois de testar
export const Tabelas = () => {
  const [tab, setTab] = useState<'tabela' | 'graficos'>('tabela');
  const [tabela, setTabela] = useState<'escolaridade' | 'profissao' | 'movimentacoes' | 'deficiencia'>('escolaridade');

  return (
    <div className="Data">
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
              className={tabela === 'profissao' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('profissao')}
            >
              Salário por Profissão
            </button>
            <button
              className={tabela === 'movimentacoes' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('movimentacoes')}
            >
              Total de Movimentações por Ano
            </button>
            <button
              className={tabela === 'deficiencia' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setTabela('deficiencia')}
            >
              Profissões por Deficiência
            </button>
          </div>
          {tabela === 'escolaridade' && <TabelaSalarioPorEscolaridade />}
          {tabela === 'profissao' && <TabelaSalarioPorProfissao />}
          {tabela === 'movimentacoes' && <TabelaAnoTotalMovimentacoes />}
          {tabela === 'deficiencia' && <TabelaProfissoesPorDeficiencia />}
        </>
      )}
      {tab === 'graficos' && <Data />}
    </div>
  );
};

