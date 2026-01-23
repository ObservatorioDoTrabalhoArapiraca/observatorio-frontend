import React, { useEffect, useState } from 'react';
import { getSalarioPorEscolaridade } from '../core/services/salarioService';
import './SalarioTable.css';
import { DistribuicaoPorEscolaridade } from '@/types';

const TabelaSalarioPorEscolaridade: React.FC = () => {
  const [salarios, setSalarios] = useState<DistribuicaoPorEscolaridade[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSalarioPorEscolaridade(); 
        if (data && Array.isArray(data)) {
          setSalarios(data);
        } else {
          setSalarios([]);
          setError('Nenhum dado disponível.');
        }
      } catch (err) {
        console.error('Erro ao carregar salários:', err);
        setSalarios([]);
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
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Salário por Escolaridade</h1>
      <table>
        <thead>
          <tr>
            <th>Escolaridade</th>
            <th>Saldo</th>
            <th>Maior Salário</th>
            <th>Menor Salário</th>
          </tr>
        </thead>
        <tbody>
          {salarios.map((salario, index) => (
            <tr key={index}>
              <td>teste</td>
              {/* <td>{salario.grau_de_instrucao}</td>
              <td>{salario.saldo.toFixed(2)}</td>
              <td>{salario.maior.toFixed(2)}</td>
              <td>{salario.menor.toFixed(2)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaSalarioPorEscolaridade;