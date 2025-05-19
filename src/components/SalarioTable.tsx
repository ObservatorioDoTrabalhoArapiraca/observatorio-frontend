import React, { useEffect, useState } from 'react';
import { getSalarioPorEscolaridade, SalarioPorEscolaridade } from '../core/services/salarioService';
import './SalarioTable.css';

const TabelaSalarioPorEscolaridade: React.FC = () => {
  const [salarios, setSalarios] = useState<SalarioPorEscolaridade[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSalarioPorEscolaridade(); 
        setSalarios(data); 
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
      <h1>Salário por Escolaridade</h1>
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
              <td>{salario.escolaridade}</td>
              <td>{salario.saldo.toFixed(2)}</td>
              <td>{salario.maior.toFixed(2)}</td>
              <td>{salario.menor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaSalarioPorEscolaridade;