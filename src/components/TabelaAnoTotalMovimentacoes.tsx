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
        setLoading(true);
        setError(null);
        const data = await getAnoTotalMovimentacoes();

        console.log('📊 [TabelaAnoTotalMovimentacoes] Dados recebidos:', data);
        console.log('📊 [TabelaAnoTotalMovimentacoes] Tipo:', typeof data);
        console.log('📊 [TabelaAnoTotalMovimentacoes] É array?', Array.isArray(data));
        // console.log('📊 [TabelaAnoTotalMovimentacoes] Length:', data?.length);

        setDados(data || []);
        setDados(data);
        if (data && Array.isArray(data)) {
          setDados(data);
          console.log('📊 [TabelaAnoTotalMovimentacoes] Estado atualizado com sucesso');
        } else {
          console.warn('⚠️ [TabelaAnoTotalMovimentacoes] Dados inválidos');
          setDados([]);
          setError('Nenhum dado disponível.');
        }
      } catch (err) {

        
        setError('Erro ao carregar os dados. Tente novamente mais tarde.');
        
        if (err instanceof Error) {
          console.error('❌ Mensagem:', err.message);
          console.error('❌ Stack:', err.stack);
        }
        setDados([]);
        setError('Erro ao carregar os dados.');
      } finally {
        console.log('📊 [TabelaAnoTotalMovimentacoes] Fetch finalizado');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log('📊 [TabelaAnoTotalMovimentacoes] Renderizando - Loading:', loading, 'Error:', error, 'Dados:', dados.length);
  
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

    if (!dados || dados.length === 0) {
    return <div className="no-data">Nenhum dado disponível</div>;
  }
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
              <td>{item.total_movimentacoes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAnoTotalMovimentacoes; 