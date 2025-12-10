import React, { useEffect, useState } from 'react';
import { getProfissoesPorDeficiencia, ProfissoesPorDeficiencia } from '../core/services/salarioService';
import './SalarioTable.css';

type SortDirection = 'asc' | 'desc' | 'default';
type SortColumn = 'cbo_2002_ocupacao' | 'total_deficientes' | null;

const TabelaProfissoesPorDeficiencia: React.FC = () => {
  const [dados, setDados] = useState<ProfissoesPorDeficiencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('default');
  const [filtroDeficiencia, setFiltroDeficiencia] = useState<string>('');

  // Mapeamento de códigos CBO para nomes de profissões mais legíveis
  const substituicoes: { [key: string]: string } = {
    '142140': "Gerente de facility management",
    '211220': "Cientista de dados",
    '322715': "Massoterapeuta",
    '423115': "Auxiliar de faturamento"
  };

  // Tipos de deficiência disponíveis para filtro
  const tiposDeficiencia = [
    'Física',
    'Auditiva',
    'Visual',
    'Intelectual',
    'Múltipla',
    'Reabilitado'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProfissoesPorDeficiencia(filtroDeficiencia || undefined);
        if (data && Array.isArray(data)) {
          // Aplica as substituições aos dados
          const dadosProcessados = data.map(item => ({
            ...item,
            cbo_2002_ocupacao: substituicoes[item.cbo_2002_ocupacao] || item.cbo_2002_ocupacao
          }));
          setDados(dadosProcessados);
        } else {
          setDados([]);
          setError('Nenhum dado disponível.');
        }
      } catch (err) {
        console.error('Erro ao carregar profissões por deficiência:', err);
        setDados([]);
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filtroDeficiencia]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      // Cicla entre asc -> desc -> default
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection('default');
        setSortColumn(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortedData = (data: ProfissoesPorDeficiencia[]) => {
    if (!sortColumn || sortDirection === 'default') {
      return [...data].sort((a, b) => b.total_deficientes - a.total_deficientes);
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' 
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });
  };

  const filteredDados = dados.filter(item =>
    item.cbo_2002_ocupacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedDados = getSortedData(filteredDados);

  const getSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) return '↕';
    if (sortDirection === 'asc') return '↑';
    if (sortDirection === 'desc') return '↓';
    return '↕';
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Profissões com Mais Pessoas com Deficiência
      </h1>
      
      <div style={{ 
        marginBottom: '2rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Filtro por tipo de deficiência */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label htmlFor="filtro-deficiencia" style={{ fontWeight: 'bold' }}>
            Filtrar por deficiência:
          </label>
          <select
            id="filtro-deficiencia"
            value={filtroDeficiencia}
            onChange={(e) => setFiltroDeficiencia(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem',
              minWidth: '150px'
            }}
          >
            <option value="">Todas as deficiências</option>
            {tiposDeficiencia.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Buscar por profissão"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            textAlign: 'center'
          }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th 
              onClick={() => handleSort('cbo_2002_ocupacao')}
              style={{ cursor: 'pointer' }}
            >
              Profissão {getSortIcon('cbo_2002_ocupacao')}
            </th>
            <th 
              onClick={() => handleSort('total_deficientes')}
              style={{ cursor: 'pointer' }}
            >
              Total de Pessoas com Deficiência {getSortIcon('total_deficientes')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedDados.map((item, idx) => (
            <tr key={idx}>
              <td>{item.cbo_2002_ocupacao}</td>
              <td>{item.total_deficientes.toLocaleString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {filtroDeficiencia && (
        <p style={{ 
          marginTop: '1rem', 
          fontStyle: 'italic', 
          textAlign: 'center',
          color: '#666'
        }}>
          Mostrando resultados para: <strong>{filtroDeficiencia}</strong>
        </p>
      )}
    </div>
  );
};

export default TabelaProfissoesPorDeficiencia;
