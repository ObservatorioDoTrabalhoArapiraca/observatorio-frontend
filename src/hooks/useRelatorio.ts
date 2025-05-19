import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Relatorio {
  ano: number;
  mes: string;
  url: string;
}

export const useRelatorios = () => {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Relatorio[]>('localhost:8000/api/relatorios/') 
      .then(response => setRelatorios(response.data))
      .catch(error => console.error('Erro ao buscar relatórios:', error))
      .finally(() => setLoading(false));
  }, []);

  return { relatorios, loading };
};