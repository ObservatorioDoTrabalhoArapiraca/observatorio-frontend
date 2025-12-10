import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL as string;

console.log('🌐 API_URL configurada:', API_URL);


if (!API_URL) {
  console.error('❌ VITE_API_URL não está definida!');
}

const api = axios.create({
  baseURL: API_URL, 
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});





export default api;