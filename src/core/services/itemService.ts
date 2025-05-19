import api from './api';

export const getItems = async () => {
  try {
    const response = await api.get('items/'); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os itens:', error);
    throw error;
  }
};