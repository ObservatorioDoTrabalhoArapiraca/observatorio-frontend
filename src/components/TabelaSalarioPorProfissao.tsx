import React, { useEffect, useState } from 'react';
import { getSalarioPorProfissao } from '../core/services/salarioService';
import './SalarioTable.css';
import { SalarioPorProfissao } from '@/types';

type SortDirection = 'asc' | 'desc' | 'default';
type SortColumn = 'profissao' | 'maximo' | 'minimo' | 'media' | 'total' | null;

const TabelaSalarioPorProfissao: React.FC = () => {
  const [dados, setDados] = useState<SalarioPorProfissao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('default');

  const substituicoes: { [key: string]: string } = {
    '142140': "Gerente de facility management",
    '211220': "Cientista de dados",
    '322715': "Massoterapeuta",
    '423115': "Auxiliar de faturamento"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSalarioPorProfissao();
        if (data && Array.isArray(data)) {
          // Aplica as substituições aos dados
          const dadosProcessados = data.map(item => ({
            ...item,
            profissao: substituicoes[item.profissao] || item.profissao
          }));
          setDados(dadosProcessados);
        } else {
          setDados([]);
          setError('Nenhum dado disponível.');
        }
      } catch (err) {
        console.error('Erro ao carregar profissões:', err);
        setDados([]);
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const getSortedData = (data: SalarioPorProfissao[]) => {
    if (!sortColumn || sortDirection === 'default') {
      return [...data].sort((a, b) => a.profissao.localeCompare(b.profissao));
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
    item.profissao.toLowerCase().includes(searchTerm.toLowerCase())
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
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Salário por Profissão</h1>
      <div style={{ 
        marginBottom: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
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
              onClick={() => handleSort('profissao')}
              style={{ cursor: 'pointer' }}
            >
              Profissão {getSortIcon('profissao')}
            </th>
            <th 
              onClick={() => handleSort('maximo')}
              style={{ cursor: 'pointer' }}
            >
              Máximo {getSortIcon('maximo')}
            </th>
            <th 
              onClick={() => handleSort('minimo')}
              style={{ cursor: 'pointer' }}
            >
              Mínimo {getSortIcon('minimo')}
            </th>
            <th 
              onClick={() => handleSort('media')}
              style={{ cursor: 'pointer' }}
            >
              Média {getSortIcon('media')}
            </th>
            <th 
              onClick={() => handleSort('total')}
              style={{ cursor: 'pointer' }}
            >
              Total {getSortIcon('total')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedDados.map((item, idx) => (
            <tr key={idx}>
              <td>{item.profissao}</td>
              <td>{item.maximo.toFixed(2)}</td>
              <td>{item.minimo.toFixed(2)}</td>
              <td>{item.media.toFixed(2)}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaSalarioPorProfissao; 