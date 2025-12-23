import React, { useEffect, useState } from 'react';
import { getMedianaSalario } from '../core/services/salarioService';
import './SalarioTable.css';
import { MedianaSalario } from '@/types';

const TabelaMedianaSalario: React.FC = () => {
  const [dados, setDados] = useState<MedianaSalario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMedianaSalario();
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
    <div>
      <h1>Mediana Salarial por Sexo</h1>
      <table>
        <thead>
          <tr>
            <th>Sexo</th>
            <th>Mediana Salarial</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, idx) => (
            <tr key={idx}>
              <td>{item.sexo}</td>
              <td>{item.mediana.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaMedianaSalario; 