import React, { useEffect, useState } from 'react';
import { getAnoTotalMovimentacoes, AnoTotalMovimentacoes } from '../core/services/salarioService';
import './SalarioTable.css';

const TabelaAnoTotalMovimentacoes: React.FC = () => {
  const [dados, setDados] = useState<AnoTotalMovimentacoes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnoTotalMovimentacoes();
        setDados(data);
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Total de Movimentações por Ano</h1>
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Total de Movimentações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, idx) => (
            <tr key={idx}>
              <td>{item.ano}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAnoTotalMovimentacoes; 